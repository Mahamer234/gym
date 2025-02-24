import { Header ,Plans,Programs,WhyUs,Testmonials,Contact,Footer, ScrollIndicator, ScrollToTop} from "./Componnents";
function App() {
  
  return (
    <div className="App">
      <ScrollIndicator/>
      <Header />
      <Programs />
      <WhyUs />
      <Plans/>
      <Testmonials />
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
