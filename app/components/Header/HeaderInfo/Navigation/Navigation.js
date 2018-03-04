import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.menuItemNames = [
      { name: 'ГЛАВНАЯ',  link: '/' },
      { name: 'РЕЗЕРВЫ',  link: '/' },
      { name: 'ОТЗЫВЫ',   link: '/' },
      { name: 'КОНТАКТЫ', link: '/contacts' }
    ];
  }

  render() {
    return(
      <div className='navigation'>
        <div className='navigation-menu'>
          { this.menuItemNames.map((item, key) =>
            <div className='navigation-menu-block' key={ key }>
              <Link to={ item.link }>
                <div className='navigation-menu-item'>
                  { item.name }
                </div>
              </Link>
            </div>
          ) }
        </div>
      </div>
    )
  }
}
