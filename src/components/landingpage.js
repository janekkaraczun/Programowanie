import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', height:'100%', margin: 'auto'}} id='ramka'>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/J-H_zT7joSn-RplSYHt-cxlLxFFo-tIZTuiR0DvlhINi1rrQtInEK84K5b8xpph2AjtoMfHNFvrvX_iG4Rp5nT_mUVLI3qToK4gx2YUfjtmWihUgKi5PJ1KT5feDV3BR07_8yby8mXnz35AW_jPvzExBP7VaTAxivQLJbOVcUIvE-X6FHlv10A8gk6AHRJlwdI0EGg0fJ5gPo0dm66wgfyCtfrQ67GmedUynPXAynAvJ1Mzw8rxHvHES5IvGgFUa6yEEWFVthnsMU3V4XlQxdqTFx_zzkWbbQKT7-X8cVFlgvdWAFJD0BBBHTHFgK3nZu3HWKeo8ajFzA9LEVkMg3bqMHcCvpPH9dK5dtTv80Z0Dq__rZV-n6zOxu-6ZYrljUcJRRZIJn5c4iisxPr2AfRmMZ-foq2Y6PmYrG1Nddn_pZUKs4yOy9I-GBrM0hGzzIh69ZPIgbVMJExTr4--uMz8FL8rBP9Bp1E0K3UMIOiA_sGbrVnAdsW5cT_afeSy3lJzAlc026G8ocJEWCUqPcMBj39z1A0qyrc0g1U0nN2FwdUA9mmqxK_G8Bh6KmivpggLhx8hk3jDRuB95gaTFJIrmUNAmTgGUR_VX7fA6OD6O70t7sAYdxGmq5TJ8oe3l9OWX9tJ26kPr1P7LuzbMoe5GyuIASMCFzW1sQJ2QD_t9DQ8JiOV9PFkNdTqBPrTSN-J_QtJxDsv2JgV8KejRaale=w744-h651-no"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text"><h1>Web Developer and SEO Specialist</h1>

            <hr/>

            <p>HTML/CSS | Bootstrap | JavaSctipt | React | NodeJS | Master of Economics at Warsaw University of Life Sciences</p>
            <div className="social-links">
            {/* link do linkedin */}
              <a href="https://www.linkedin.com/in/janek-karaczun-76a19017a/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* link do githuba */}
              <a href="https://github.com/janekkaraczun" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* link do youtube */}
            {/*  <a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">*/}
            {/*    <i className="fa fa-youtube-square" aria-hidden="true" />*/}
            {/*  </a>*/}
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
