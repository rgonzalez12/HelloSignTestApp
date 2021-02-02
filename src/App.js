import './App.css';
import HelloSign from 'hellosign-embedded'

const client = new HelloSign({
  clientId: 'f218efa0ab500c0eb26fc57071551479'
});

client.on('open', (data) => {
  console.log(`The signature request was opened with ${data}`);
});

client.on('sign', (data) => {
  console.log('The signature request was signed!');
});

client.on('cancel', () => {
  console.log('The signature request was canceled');
});

client.on('close', () => {
  console.log('The signature request window was closed');
});



function App() {
  function signMe() {
    client.open('https://app.hellosign.com/editor/embeddedSign?signature_id=08811593371a134c736b35a9519f030a&token=efbb0f81939f2107f86e6c4c45df9dbf', {skipDomainVerification: true});
  }
  return (
    <div className="App">
      <button onClick={signMe}>
        Sign me
      </button>
    </div>
  );
}

export default App;