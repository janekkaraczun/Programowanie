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
              'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}}>My Resume</CardTitle>
            <CardText>
              <div> My third project is this website. It was created in React, using React-MDL Components. I will be constantly upgrading it, so it stays up
              to date.
              </div>
            </CardText>
              {/* <CardActions border>
                <Button colored>Github</Button>
                <Button colored>next link</Button>
                <Button colored>Nic</Button>
               </CardActions>*/}
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
                Google Analytics is one of the most important tools for SEO and SEM analysis.
                I worked on configuration and creating reports to carry out analysis of website traffic.
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
                  that is very important for analysis of websites traffic.
                </CardText>
                <CardActions border>
                  <Button href='https://search.google.com/search-console/about' target='_blank' colored>Google Search Console</Button>
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
                          'url(https://technologiczna.pl/wp-content/uploads/2017/06/facebook-76536.png) center / cover'}}></CardTitle>
                        <CardText>
                          I was also taking care of the facebook page and used it for advertising articles.
                        </CardText>
                          <CardActions border>
                            <Button href='https://www.facebook.com/fakturomania/' target='_blank' colored>Facebook</Button>
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
          </div>
      )

    }else if (this.state.activeTab === 2) {
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
          <Tab>Projects</Tab>
          <Tab>Other Skills</Tab>
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
