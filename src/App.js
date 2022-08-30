import "antd/dist/antd.css";
import './App.css';
import { useEffect, useState } from 'react';
import { varList } from './common/var';
import { Tooltip } from 'antd';

// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

const testData = varList("data");

function App() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    if (testData.length > 0) {
      testData.sort((a, b) => b.source_items.audience_size - a.source_items.audience_size);
      setLogos(testData);
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>Choose a Conde Nast brand's audience:</h5>
          </div>
          {logos.map((el, index) => (
            <Tooltip title={el.source_items.id} key={index}>
              <div className="col-sm-3 logo">
                <div className="logo-image">
                  <img alt={el.source_items.name} src={el.social_media_pages.picture} />
                  <div className="overlay"></div>
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
