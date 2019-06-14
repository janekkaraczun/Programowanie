import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/05H3Fm7wBBRUB8U6C_3X9TmB9TJ31l1QnhyyIjqCn3-W7HcvVL3gXxEFwJtXwqigINhJL1K5891qoxbsoHQerQOzkOYTL6Vtt_f1UCSphQjIXfZGsJrU7DqDSd4-xAZWGIT-xOxlSe5nZ0n6FqKWGmNtR_VBVXJr-Zzc942kuPRSlJ-ZfY26WhwA_VOaKkPoSd4T7YFX719zA91gqsiiXKCIHlltTJCWRvCorAmuPZWOeX--mGmGqP-Gzust7-5RGSEpAYlVRVwqkhFTkDNuTD2oJ3Eol_0j_8gUoSo3gBWK9QaUOhETFTU3aXvNSxnjXa4j2N-mpDsQQvvwBwblgcjdct6IvSrI_dXbCWtZJ33TfqbzQKEAmipbaeBGeWZIZSsONy-rZSQ4lXLVx6h0aJeOvovRVZh8CmPVUb1rFdUrrQ0B1vI2ZtSaQiOrvhOsvtjgPbnx4oniTuI7FK5WVbVjhF_KboTur13RyiTpQt3GdeRmswG7vu7Kucc0ClZSJcWT8AzSMScXX25m_fblT45eFEyJvT_3izKglW-9-vyoYlVS9r_qlKnx05SBJQBIdIUGn317fWPIOahFjjf7nctxq4kccJ2UgCI07Iz8DDjkfm64ogPhof1acDEyK96M7d-JhjlHbBGVyNWqpgGaL7pozAydsEyWsjw5KjmeeVISoV7ndK0nV3tMI3K4XEpZHqEtU6bwcg73hlzSdi3W_DkC=w564-h757-no"
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
              <a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
