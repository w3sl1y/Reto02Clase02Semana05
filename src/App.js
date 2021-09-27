import './App.css';
const cityList1 = [
  {
    value: 'Moscow',
  },
]
const cityList2 = [
  {
    value: 'Rome',
  },
]
const cityList3 = [
  {
    value: 'Beijing',
  }
]
const cityList4 = [
  {
    value: 'Istanbul',
  },
]
const App = () => {
  const greeting = "greating";
  return (
    <div className="container">
    <h1 id={greeting}>Citys of the world</h1>
    <p>Major capitals of the world</p>
    <ul>
      {cityList1.map(city => (
        <li>
          <button class="coral">
          <img src="https://images.vexels.com/media/users/3/149950/isolated/preview/c7ebef42e1092cfef0021b4f6335942f-moscow-skyline-silhouette.png" align = "center" height = "400" width = "250"/>
          <br/>
            <span role="img" aria-label={city.info} id={city.info}>{city.value}</span>
            <br/><br/>
          </button>
        </li>
      ))}
      {cityList2.map(city => (
        <li>
          <button class="yellow">
          <img src="https://svgsilh.com/svg_v2/48580.svg" align = "center" height = "400" width = "280"/>
          <br/>
            <span role="img" aria-label={city.info} id={city.info}>{city.value}</span>
            <br/><br/>
          </button>
        </li>
      ))}
    </ul>
    <ul>
      {cityList3.map(city => (
        <li>
          <button class="plum">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/beijing-3479546-2907528.png" align = "center" height = "400" width = "295"/>
          <br/>
            <span role="img" aria-label={city.info} id={city.info}>{city.value}</span>
            <br/><br/>
          </button>
        </li>
      ))}
      {cityList4.map(city => (
        <li>
          <button class="sky">
          <img src="https://images.vexels.com/media/users/3/131146/isolated/preview/7a85c5bc1b122b651c7a87857efe8558-silueta-del-horizonte-de-estambul.png" align = "center" height = "400" width = "280"/>
          <br/>
            <span role="img" aria-label={city.info} id={city.info}>{city.value}</span>
            <br/><br/>
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
