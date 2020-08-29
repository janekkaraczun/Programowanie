
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>

            <h2 style={{paddingTop: '2em'}}>Jan Karaczun</h2>
            <h4 style={{color: 'grey'}}>Web developement and online marketing</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>During studying at University I acquired numerous statistics skills, 
              including predicting economic processes and I learned basics of programming in R. 
              Afterwards I expanded my analytical skills while working in SEO and learned programming with the use of JavaScript, 
              CSS, HTML5 and React.js by myself.  I'm looking for a long term full-time job position in a stable and prosperous company 
              that will allow me to further develop my skills and provide me with knowledge and experience, which will allow me to meet the 
              need for continuous personal development. For CV in English or Polish email me to janek.karaczun@yahoo.com
              
              In my free time I'm passionate about science, music, sailing, enviorment protection and meditation. 
              Recently I enjoy gardening and investing in the financial market.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {/*<h5>Address</h5>
            <p>Grabowa 7, 05-822 Milanówek</p>*/}
            <h5>Phone</h5>
            <p>(+48) 661-998-798</p>
            <h5>Email</h5>
            <p>janek.karaczun@yahoo.com</p>
            <h5>Web</h5>
            <a href="https://janekkaraczun.github.io/My-resume" colored>https://janekkaraczun.github.io/My-resume</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2013}
                endYear={2016}
                schoolName="Bachelor of Economics at Warsaw University of Life Sciences"
                schoolDescription='The title of the diploma was "The national road fund as a source of financing infrastructure in 2009-2015"'
                />
              <Education
                startYear={2016}
                endYear={2018}
                schoolName="Master of Economics at Warsaw University of Life Sciences"
                schoolDescription={<div>Profile of specialization: economics and organization of enterprises. The title of the diploma was
                "Impact of Poland's accession to the European Union on rail transport in Poland"</div>}
                />
            <hr style={{borderTop: '3px solid #833fb2'}} />

            <h2>Experience</h2>
              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Polish Ecological Club (Polski Klub Ekologiczny)"
                jobDescription={<div>
                  <ul>
                  <li>Work with code in Wordpress (mostly HTML)</li>
                  <li>SEO for educational website</li>
                  <li>Traffic and website analysis</li>
                  <li>Optimisation of educational articles focused mostly on enviormental influence of mining and energy industries in Poland</li>
                  </ul>
                  </div>}
              />
              <Experience
            startYear={2019}
            endYear={2019}
            jobName="Starcom"
            jobDescription={<div>
              <ul>
                <li>Analysing domains' code, DOM elements and content</li>
                <li>Working on analysis of websites with a use of following tools: Ahrefs, Screaming Frog, Senuto, Semstorm, Google Analitycs, Google Search Console, Google Ads and others</li>
                <li>Creation of a complex blog report consisting of diversed SEO data</li>
                <li>Reviewing, correction, reporting and outsourcing publication of SEO blog articles</li>
              </ul>
              </div>}
              />
              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Fakturomania"
                jobDescription={<div>
                  <ul>
                    <li>Adding, removing elements and tags, fixing bugs on marketing website fakturomania.pl with the use of JavaScript ES6, React and GatsbyJS</li>
                    <li>Work with code in text editor Ghost</li>
                    <li>Configuration and websites integration with Google Analytics accounts, Google Search Console. Conducting various data analysis and reports. Also with the help of other Google tools, Mangools and Ubersuggest</li>
                    <li>Creating advanced Excel tables calculating client employees' salaries, taxes and social security contributions</li>
                    <li>Contact with clients, work and time management (mainly using Monday and Clickup), work on accounting documentation, contracts and other</li>
                    <li>Accountancy for private limited liability companies (mostly micro-enterprises)</li>
                    <li>Creating and maintaining a newsletter through Mailjet, creating articles promoting the blog (compliance with SEO principles), creation and work on a knowledge base, running social media websites</li>
                  </ul>
                </div>}
              />
              <Experience
                startYear={2016}
                endYear={2017}
                jobName="PricewaterhouseCoopers"
                jobDescription={<div>
                  <ul>
                    <li>Work on confidential information in the general audit of companies</li>
                    <li>I have undergone training on health and safety, data confidentiality, data security, safe use of the Internet, as well as advanced course of using Microsoft Excel</li>
                    </ul>
                    
                </div>}
              />
              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Polish Ecological Club (Polski Klub Ekologiczny)"
                jobDescription={<div>
                <ul>
                  <li>Work on the scientific publication in 2016 on road tolls in Poland</li>
                  <li>Project "Implementation of climate policy goals for 2030 in non-ETS sectors", financed by the Federal Republic of Germany through the German Embassy in Warsaw</li>
                  <li>Work on organizing conferences and debates</li>
                  <li>Creating and translating documents and brochures related to conferences</li>
                  <li>Distribution of publications</li>
                </ul>
                </div>}
              />


              <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={60}
                />
                <Skills
                  skill="HTML5 & CSS"
                  progress={90}
                  />
                  {/*<Skills
                    skill="NodeJS"
                    progress={30}
                    />*/}
                    <Skills
                      skill="React & Redux"
                      progress={60}
                      />
                      <Skills
                        skill="Git"
                        progress={50}
                        />
                      <Skills
                        skill="Google Analytics"
                        progress={80}
                        />
                        <Skills
                          skill="Google Search Console"
                          progress={80}
                          />
                          <Skills
                            skill="Other SEO tools"
                            progress={70}
                            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
