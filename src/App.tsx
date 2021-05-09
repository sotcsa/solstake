import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Card, CardContent, Container, Link as L2, Menu, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { OpenInNew, Sync } from '@material-ui/icons';
import { findStakeAccountMetas, StakeAccountMeta } from './utils/stakeAccounts';

const demoStakeAccounts: StakeAccountMeta[] = [
  {address: new PublicKey(0), seed: 'stake:0', balance: 123.23},
  {address: new PublicKey(0), seed: 'stake:1', balance: 221.0},
  {address: new PublicKey(0), seed: 'stake:2', balance: 1}
];

const connection = new Connection(clusterApiUrl('mainnet-beta'))

function App() {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);
  const [stakeAccounts, setStakeAccounts] = useState<StakeAccountMeta[]>(demoStakeAccounts);

  async function fetchStakeAccounts(pk: PublicKey) {
    setStakeAccounts(await findStakeAccountMetas(connection, pk));
    setLoading(false);
  }

  useEffect(() => {
    setStakeAccounts([]);
    if (publicKey !== null) {
      setLoading(true);
      fetchStakeAccounts(publicKey);
    }
  }, [publicKey]);
  
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Solstake
          </Typography>
        <div style={{flexGrow: 1}}></div>
        <div style={{display: 'flex', gap: '10px'}}>
          <Button variant="contained" disabled>Demo</Button>
          <Button variant="contained">Connect wallet</Button>
        </div>
        </Toolbar>
      </AppBar>
      <Menu
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={false}
      >
          <MenuItem>Demo</MenuItem>
      </Menu>
      <main>
        <Container maxWidth="sm">
          <TextField
            id="standard-basic"
            label="Wallet public key"
            value={publicKey?.toBase58()}
            error={errorInfo !== null}
            helperText={errorInfo}
            onChange={async function(e) {
              try {
                const walletAddress = new PublicKey(e.target.value);
                setErrorInfo(null);
                setPublicKey(walletAddress);
              }
              catch {
                console.log(`${e.target.value} is not a valid PublicKey input`);

                setErrorInfo('Invalid public key');
                setPublicKey(null);
              }
            }}
          />
          <Button>
            <Sync />
          </Button>
          <Container>
          {loading ? (<Skeleton height={200}></Skeleton>): stakeAccounts.map(stakeAccount => (
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {`${stakeAccount.seed}`}
                </Typography>
                <Typography variant="h5" component="h2">
                  {`Balance: ${stakeAccount.balance} SOL`} 
                </Typography>
                <Typography color="textSecondary">
                  { stakeAccount.stakeAccount ? `Type: ${stakeAccount.stakeAccount.type}, activation epoch: ${stakeAccount.stakeAccount.info.stake?.delegation.activationEpoch}, voter: ${stakeAccount.stakeAccount.info.stake?.delegation.voter}` : 'No data' }
                </Typography>
                <L2 href={`https://explorer.solana.com/address/${stakeAccount.address.toBase58()}`}>
                  <OpenInNew />
                </L2>
              </CardContent>
              {/* <CardActions>
                <Button variant="contained">Coming soon</Button>
              </CardActions> */}
            </Card>
          ))}
          </Container>
        </Container>
      </main>
    </>
  );
}

export default App;