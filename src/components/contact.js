import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          {/* lewa strona */}
          <Cell col={6}>
            <h2>Jan Karaczun</h2>
            <img
              src="http://clipart-library.com/img/1344176.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>
            Thank you for visiting my website. If you want to contact me please feel free to use information on the right side. I usually answer e-mails the
            same day or in two days, if there will be no answer it might mean that the message have been filtered to spam - I recommend telephone contact.</p>
          </Cell>

          {/* prawa strona */}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List style={{minWidth:'290px'}}>
                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (+48)661-998-798
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  janek.karaczun@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden="true" />
                  janek.janek.janek1
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
