import logo from './logo.svg';
import './App.css';
import { styled } from "@mui/material";
import { TonConnectButton } from "@tonconnect/ui-react";

const StyledTonConnectButton = styled(TonConnectButton)(({ theme }) => ({
  button: {
    background: theme.palette.primary.main,
    "*": { color: "white" },
    svg: {
      "*": {
        stroke: "white",
      },
    },
  },
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <StyledTonConnectButton />
        </div>
      </header>
    </div>
  );
}

export default App;
