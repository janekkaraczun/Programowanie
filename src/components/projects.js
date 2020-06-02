import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu,  CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#737373', height: '176px', background:
              'url(https://lh3.googleusercontent.com/proxy/UAH181yFnfjeNYtJpm1Ki6x1N3zzLL86HXt6EEW_JoOI4h12AU9zm9vjuH0J8OulSxG2brYMAmIZ-mOPIgx4vaMZFdvyvc6CjuSUfy7FFsuqrWrAlRG3d1WdmjaX__kherk) center / cover'}}></CardTitle>
            <CardText>
            <div>HTML is basic programming language used for structuring and presenting content in the internet.
            </div>
            </CardText>
              {/*<CardActions border>
                <Button href='https://fakturomania.freshdesk.com/support/home' target="_blank" colored>Knowledge Base</Button>
                <Button href='https://freshdesk.com/' target="_blank" colored>Freshdesk</Button>
              </CardActions>*/}
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#737373', height: '176px', background:
              'url(https://www.abeautifulsite.net/uploads/2012/12/css3-logo.png?width=300&key=b27e7a869d53ee9b0d91568879a8f279ab2b9c61022a4121b3bf2bdd33a7d3c3) center / cover'}}></CardTitle>
            <CardText>
              <div>CSS is a language used for creating eye-pleasing website styling(including layout). My favourite layout model is Flexbox, it provides responsive elements that are arranged automatically within given container.
              Responsiveness is particulary important when while displaying a website on mobile device.
              </div>
             </CardText>
              {/*<CardActions border>
                <Button href="https://blog.fakturomania.pl/sprawozdanie-finansowe-przez-internet-krok-po-kroku/" target="/blank" colored>Article</Button>
                <Button href="https://blog.fakturomania.pl/" target="/blank" colored>Blog</Button>
                <Button href="https://blog.fakturomania.pl/author/jan/" target="/blank" colored>Articles</Button>
              </CardActions>*/}
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
              'url(https://img-a.udemycdn.com/course/480x270/2575266_c184.jpg) center / cover'}}></CardTitle>
            <CardText>
              <div> Just like HTML and CSS, JavaScript is one of the core programming languages in web-developement. Most important fuctionalities of JavaScript to me are creating functions, web-apps and sctipts.
              </div>
            </CardText>
              {/* <CardActions border>
                <Button href="https://github.com/janekkaraczun" colored target="/blank">Github Repository</Button>
                <Button colored>next link</Button>
                <Button colored>Nic</Button>
               </CardActions>*/}
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
              'url(https://typeofweb.com/wp-content/uploads/2017/11/react-logo-1.png) center / cover'}}></CardTitle>
            <CardText>
              <div>
              React.js is an open-source JavaScript library, that is perfect for creating Single-Page Applications like this one. It allows using JavaScript to modify HTML and CSS within the same file.
              As an example it is currently in use on websites of companies like Netflix, Imgur, PayPal.
              </div>
            </CardText>
              <CardActions border>
                <Button href="https://github.com/janekkaraczun" colored target="/blank">Github Repository</Button>
                {/* <Button colored>next link</Button>
                <Button colored>Nic</Button>*/}
               </CardActions>
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
              'url(https://www.somagnews.com/wp-content/uploads/2020/04/75-e1586981465263.png) center / cover'}}></CardTitle>
            <CardText>
              <div>
              Github is a website hosting service for software developement, which allows source code management and version control with a use of Git. It allows free hosting for open source programs.
              As a matter of fact I launched this website on the internet using of Git Bash and Github pages.
              </div>
            </CardText>
              <CardActions border>
                <Button href="https://github.com/about" colored target="/blank">More about Github</Button>
                <Button href="https://pages.github.com/" colored target="/blank">More about Github Pages</Button>
                {/* <Button colored>Nic</Button>*/}
               </CardActions>
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
              'url(https://wcizmowski.iwebi.pl/wp-content/uploads/2018/01/Bootstrap-4-BETA-Blog.jpg) center / cover'}}></CardTitle>
            <CardText>
              <div>
              In my older projects I used to use Bootstrap toolkit for quick and eye-pleasing open source components.
              </div>
            </CardText>
              <CardActions border>
                <Button href="https://getbootstrap.com/" colored target="/blank">Bootstrap</Button>
                {/* <Button colored>next link</Button>
                <Button colored>Nic</Button>*/}
               </CardActions>
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
              'url(https://reactscript.com/wp-content/uploads/2016/04/React-MDL.png) center / cover'}}></CardTitle>
            <CardText>
              <div>
              Another toolkit that I'm familiar with is React-mdl, in fact I used some of its solutions to create this website.
              </div>
            </CardText>
              <CardActions border>
                <Button href="https://tleunen.github.io/react-mdl/" colored target="/blank">React-mdl</Button>
                {/* <Button colored>next link</Button>
                <Button colored>Nic</Button>*/}
               </CardActions>
              <CardMenu style={{color:'#fff'}}>
              </CardMenu>
          </Card>
        </div>
      )
    }else if (this.state.activeTab === 1) {
      return(
          <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
              <CardTitle style={{color:'#737373', height: '176px', background:
                'url(https://s3.amazonaws.com/ceblog/wp-content/uploads/2018/03/24172201/why-ga-inaccurate.jpg) center / cover'}}></CardTitle>
              <CardText>
                Google Analytics is one of the most important tools for SEO and SEM analysis. It provides very complicated and customizable reports and allows
                to measure conversions on the website. I worked on configuration GA and creating reports to carry out analysis of website traffic.
              </CardText>
                <CardActions border>
                  <Button href='https://analytics.google.com' target='_blank' colored>Google Analytics</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                </CardMenu>
            </Card>

              <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                <CardTitle style={{color:'#737373', height: '176px', background:
                  'url(http://blog.clickdimensions.com/wp-content/uploads/2018/12/NewBlogFeature-How-to-Use-Google-Search-Console-to-Improve-Your-Search-Ranking.png) center / cover'}}></CardTitle>
                <CardText>
                  Google Search Console is another powerful tool supported by Google. Although it doesn't allow to make customized reports it provides data
                  that is very important for analysis of websites traffic. I used it mostly for searching for keywords.
                </CardText>
                <CardActions border>
                  <Button href='https://search.google.com/search-console/about' target='_blank' colored>Google Search Console</Button>
                </CardActions>
              </Card>

              <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                <CardTitle style={{color:'#fff', height: '176px', background:
                  'url(https://i.udemycdn.com/course/750x422/1646734_a465_3.jpg) center / cover'}}></CardTitle>
                <CardText>
                  I was also using Google Ads for analysis of the most apropriate keywords to advertise on.(Google Ads doesn't allow to open their website
                  in another card, so clicking the link below will lead you to their website)
                </CardText>
                  <CardActions border>
                    <Button href='https://ads.google.com/' colored>Google Ads</Button>
                  </CardActions>
              </Card>

              <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                <CardTitle style={{color:'#fff', height: '176px', background:
                  'url(https://super-monitoring.com/blogpl/wp-content/uploads/2019/02/ahrefs.png) center / cover'}}></CardTitle>
                <CardText>
                  Ahrefs is one of the most powerful SEO tools avaible, it provides detailed information on all websites and keywords and complex competition and SERP analysis.
                </CardText>
                  <CardActions border>
                    <Button href='https://ahrefs.com/' target='_blank' colored>Ahrefs</Button>
                    {/*}<Button href='https://neilpatel.com/seo-analyzer/' target='_blank' colored>Seo Analyzer</Button>*/}
                  </CardActions>
              </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                  <CardTitle style={{color:'#fff', height: '176px', background:
                    'url(https://ph-files.imgix.net/8bf62f39-3e38-428e-8fad-fa8ddd9145f9?auto=format) center / cover'}}></CardTitle>
                  <CardText>
                    Next tool I was using for analysis and keyword searches is Ubersuggest. It was made by one of the greatest online marketing lead experts
                     worldwide - Neil Patel. It allows to carry out complex analysis and provides large quantities of keywords. One of the most useful sections of
                     Ubersuggest is SEO Analyzer.
                  </CardText>
                    <CardActions border>
                      <Button href='https://neilpatel.com/ubersuggest/' target='_blank' colored>Ubersuggest</Button>
                      <Button href='https://neilpatel.com/seo-analyzer/' target='_blank' colored>Seo Analyzer</Button>
                    </CardActions>
                </Card>

                  <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background:
                      'url(https://seo-hacker.com/wp-content/uploads/2018/07/Mangools-Online-Tools_An-In-depth-Look-1024x768.png) center / cover'}}></CardTitle>
                    <CardText>
                      Another tools I used are the ones provided by Mangools. They allow to analyse data from many different angles.
                      One of the most useful is SERP analysis tool, but Keyword Finder and Link Miner are very useful too.
                    </CardText>

                      <CardActions border>
                        <Button href='https://mangools.com/' target='_blank' colored>Mangools</Button>
                        <Button href='https://serpchecker.com/' target='_blank' colored>SERP Analysis</Button>
                        <Button href='https://kwfinder.com/' target='_blank' colored>Keyword Finder</Button>
                        <Button href='https://linkminer.com/' target='_blank' colored>Link Miner</Button>
                      </CardActions>
                  </Card>

                  <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background:
                      'url(https://www.forum.optymalizacja.com/uploads/monthly_2018_06/a1.jpg.5a745a6ffcae9f2e8abb12ba8a170ec7.jpg) center / cover'}}></CardTitle>
                    <CardText>
                    Webpozycja is a Polish tool that allows to keep track of positions of websites for chosen keywords and provides complex reports on them, also allowing to compare website to competition.
                    </CardText>
                      <CardActions border>
                        <Button href='https://webpozycja.pl/' target='_blank' colored>Webpozycja</Button>
                      </CardActions>
                  </Card>

                      <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
                        <CardTitle style={{color:'#fff', height: '176px', background:
                          'url(https://technologiczna.pl/wp-content/uploads/2017/06/facebook-76536.png) center / cover'}}></CardTitle>
                        <CardText>
                          I was also taking care of the facebook page and used it for advertising articles. Facebook provides simplified reports,
                          but they are useful too. What's also important ads can be customized to reach to specified type of potential customers.
                        </CardText>
                          <CardActions border>
                            <Button href='https://www.facebook.com/' target='_blank' colored>Facebook</Button>
                          </CardActions>
                      </Card>


          </div>
      )

    }else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
          <CardTitle style={{color:'#fff', height: '176px', background:
            'url(https://oweglu.pl/wp-content/uploads/2015/06/Fotolia_41353336_Subscription_Monthly_M.jpg) center / cover'}}>Oweglu.pl</CardTitle>
          <CardText>
          <div> On the beginning of 2020 I worked in SEO for Polish Ecological Club on an educational website. It was mostly work in wordpress and SEO tools I desribed in "SEO skills" tab. I strongly ecourage to check it out, it
          contains vast amount of knowledge about mining and energetic industry in Poland and their influence on Enviorment.
          </div>
          </CardText>
            <CardActions border>
              <Button href='https://oweglu.pl/' target="_blank" colored>Oweglu.pl</Button>
              {/*<Button href='https://freshdesk.com/' target="_blank" colored>Freshdesk</Button>*/}
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
          <CardTitle style={{color:'#737373', height: '176px', background:
            'url(https://assets.pcmag.com/media/images/448086-freshdesk-logo.jpg?width=810&height=456) center / cover'}}>Knowledge Base</CardTitle>
          <CardText>
          <div>In April and May 2019 I was working on implementing a Knowledge Base for Fakturomania. The articles were written in order to raise SEO score
          and allow Fakturomania App users to solve their issues. Tool used for implementing knowledge base was Freshdesk.
          </div>
          </CardText>
            <CardActions border>
              <Button href='https://fakturomania.freshdesk.com/support/home' target="_blank" colored>Knowledge Base</Button>
              <Button href='https://freshdesk.com/' target="_blank" colored>Freshdesk</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
          <CardTitle style={{color:'#737373', height: '176px', background:
            'url(https://www.nagrodakonsumenta.pl/wp-content/uploads/2019/02/FAKTUROMANIA-NAGRODA.png) center / cover'}}>Fakturomania Blog</CardTitle>
          <CardText>
            <div>I wrote articles for SEO and informative pusposes for a blog that was made in Wordpress. The editor I was using was ghost - writing articles
             required html skill and a lot of accounting knowledge. With help of many marketing channels I menaged to raise the amount of new users from
             about 4000 to 15 000 in April 2019. It also raised the number of conversions. I placed links to the blog below.
             </div>
           </CardText>
            <CardActions border>
              <Button href="https://blog.fakturomania.pl/sprawozdanie-finansowe-przez-internet-krok-po-kroku/" target="/blank" colored>Article</Button>
              <Button href="https://blog.fakturomania.pl/" target="/blank" colored>Blog</Button>
              <Button href="https://blog.fakturomania.pl/author/jan/" target="/blank" colored>Articles</Button>
            </CardActions>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
          <CardTitle style={{color:'#fff', height: '176px', background:
            'url(https://typeofweb.com/wp-content/uploads/2017/11/react-logo-1.png) center / cover'}}>My Resume</CardTitle>
          <CardText>
            <div> My third project is this website. It was created in React, using React-MDL Components and styling in CSS. It was created in July 2019.
            Last time it was updated was June 2020. A hyperlink to the public repository with the code is below.
            </div>
          </CardText>
            <CardActions border>
              <Button href="https://github.com/janekkaraczun" colored target="/blank">Github Repository</Button>
              {/* <Button colored>next link</Button>
              <Button colored>Nic</Button>*/}
             </CardActions>
            <CardMenu style={{color:'#fff'}}>
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
          <CardTitle style={{color:'#fff', height: '176px', background:
            'url(https://cdn.pixabay.com/photo/2017/01/05/09/21/tic-tac-toe-1954446_960_720.jpg) center / cover'}}>Tic Tac Toe</CardTitle>
          <CardText>
            <div>
            Another small project I created while learning React is a mini-game based on JavaScript.
            </div>
          </CardText>
            <CardActions border>
              <Button href="https://janekkaraczun.github.io/tictactoe/" colored target="/blank">Tic Tac Toe</Button>
              {/* <Button colored>next link</Button>
              <Button colored>Nic</Button>*/}
             </CardActions>
            <CardMenu style={{color:'#fff'}}>
            </CardMenu>
        </Card>
        </div>
      )
    }else if (this.state.activeTab === 3) {
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '300px', background:
              'url(http://playo.ru/files/t.3196_1427976465.jpg) center / cover'}}>E-sports</CardTitle>
            <CardText>
              <div> One of my hobbies is e-sports. I am fan of several twitch streamers, but I mostly watch their gameplays in the evening on Youtube.
                I also play games myself. In fact through the multiplayer online games I made a lot of friends, with some of whom I still keep in touch for many years.
              </div>
            </CardText>
              <CardActions border>
                <Button href='https://www.youtube.com/channel/UC_cg5mgkp03w6aWxszEO1Hg' target='_blank' colored>Dane_hs</Button>
                <Button href='https://www.youtube.com/user/FollowGrubby' target='_blank' colored>FollowGrubby</Button>
              </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto', marginTop:'15px'}}>
            <CardTitle style={{color:'#fff', height: '300px', background:
              'url(https://upload.wikimedia.org/wikipedia/en/8/83/Apostrophe_%28%27%29.jpg) center / cover'}}>Music</CardTitle>
            <CardText>
              <div> I listen to many genres of music, but for many years my favourite ones are progressive rock and other subgenres of rock, mostly from 70' and 80'.
                Recentlly I started listening to Frank Zappa(which is very specific avant-garde) and I can't stop for a few months already.
                There are so many very different genres I like, that I will link my Spotify profile below.
              </div>
            </CardText>
              <CardActions border>
                <Button href="https://open.spotify.com/user/21ij6p6zigmvpfcic6z4tbyai?si=J4VNAY4qT1aRP0ccelvESQ" target='_blank' colored>Spotify</Button>
              </CardActions>
            </Card>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId }) } ripple>
          <Tab>Programming skills</Tab>
          <Tab>SEO Skills</Tab>
          <Tab>Projects</Tab>
          <Tab>Hobbies</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
