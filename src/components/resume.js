
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
            <p>In 2018 I finished my education at Warsaw School of Life Sciences. During my studying I worked for several Companies including
            a startup called <a href="https://fakturomania.pl/" rel="noopener noreferrer" target="_blank">Fakturomania</a> in customer service and
            as a SEO & online marketing specialist. I have been learning programming in my free time for 2 years and I created this page
            as a presentation of what I have learned. Currently I'm looking for a job as a Front-End Web Developer or a job as a SEO & digital marketing specialist. I am open for job offers from all over the world as well as remote job offers.</p>
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
                 schoolDescription=<div>Profile of specialization: economics and organization of enterprises. The title of the diploma was
                 "Impact of Poland's accession to the European Union on rail transport in Poland"</div>
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
              <Experience
                startYear={2015}
                endYear={2015}
                jobName="Environ Ramboll"
                jobDescription=<div>7-week work experience at Ramboll Environ (after a change of name), an international consulting company providing high
                quality due diligence services in the field of health and safety and environmental protection,

                My main tasks were translating documents and scientific papers, creating maps for the deployment of wind turbines (and others)
                 with the use of Corel Draw and Google Earth.</div>
                />
                <Experience
                  startYear={2015}
                  endYear={2016}
                  jobName="Polish Ecological Club (Polski Klub Ekologiczny)"
                  jobDescription=<div>Work on organizing conferences and debates, booking conference rooms, hotel rooms, expert translators and catering,
                  sending invitations, creating and translating documents and brochures related to conferences, distribution of publications.
                  Project "Implementation of climate policy goals for 2030 in non-ETS sectors", financed by the Federal Republic of Germany through the
                  German Embassy in Warsaw. Also work on the scientific publication in 2016 on road tolls in Poland.</div>
                  />
                <Experience
                  startYear={2016}
                  endYear={2017}
                  jobName="PricewaterhouseCoopers"
                  jobDescription=<div>Work on confidential information in the general audit of companies. I have undergone training on health and safety,
                  data confidentiality, data security, safe use of the Internet, as well as advanced course of using Microsoft Excel.</div>
                  />

                    <Experience
                      startYear={2018}
                      endYear={2019}
                      jobName="Fakturomania"
                      jobDescription=<div>Configuration of Google Analytics accounts, Google Search Console and conducting data analysis and creating reports.
                      Also with the help of other Google tools, Mangools, as well as Ubersuggest.

                      Creating and maintaining a newsletter through Mailjet, creating articles promoting the blog (compliance with SEO principles),
                      working on a knowledge base, running social media websites.

                      Also contact with clients, work and time management (mainly using Monday and Clickup), work on accounting documentation,
                      contracts and other.</div>
                      />
                      <Experience
                        startYear={2019}
                        endYear={2019}
                        jobName="Starcom"
                        jobDescription=<div>
                        Working on SEO for a large international corporation, which included:<ul>

                        <li>Conducting SEO audits of websites</li>
                        <li>Working on analysis of websites with a use of following tools: Ahrefs, Screaming Frog, Senuto, Semstorm, Google Analitycs, Google Search Console, Google Ads and others</li>
                        <li>Creation of a complex blog report consisting of diversed SEO data</li>
                        <li>Reviewing, correction, reporting and outsourcing publication of SEO blog articles</li>
                        </ul></div>
                        />
                        <Experience
                          startYear={2020}
                          endYear={2020}
                          jobName="Polish Ecological Club (Polski Klub Ekologiczny)"
                          jobDescription=<div>
                          SEO work for Non-governmental organisation, including mostly traffic and website analysis and articles optimisation</div>
                          />


              <hr style={{borderTop: '3px solid #e22947'}} />
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
