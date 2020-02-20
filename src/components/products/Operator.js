import React from 'react'
import { Label, Menu, Tab} from 'semantic-ui-react'

const panes = [
  { menuItem: (
    <Menu.Item key='messages'>
      <i className="fa fa-search fa-2x"></i> <h3>Search And Navigate</h3>
    </Menu.Item>
  ),
    render: () => <Tab.Pane> <img src="img5.jpg" width="180px" height="380px" style={{marginLeft: "0px"}} /> </Tab.Pane> },

  { menuItem: (
    <Menu.Item key='messages'>
         <i className="fa fa-exclamation-triangle fa-2x"></i> <h3>Ticketless Entry And Exit</h3>
    </Menu.Item>
  ),
    render: () => <Tab.Pane> <img src="img6.jpg" width="180px" height="380px" style={{marginLeft: "0px"}} /> </Tab.Pane> },
  
  { menuItem: (
    <Menu.Item key='messages'>
      <i className="fa fa-mobile-alt fa-2x"></i> <h3>Cashless Payment</h3>
    </Menu.Item>
  ),
    render: () => <Tab.Pane> <img src="img7.jpg" width="180px" height="380px" style={{marginLeft: "0px"}} /> </Tab.Pane> },
  
  { menuItem: (
    <Menu.Item key='messages'>
      <i className="fa fa-calendar-alt fa-2x"></i> <h3>Prebook Parking And VAS</h3>
    </Menu.Item>
  ),
    render: () => <Tab.Pane> <img src="img8.jpg" width="180px" height="380px" style={{marginLeft: "0px"}} /> </Tab.Pane> },
]

const TabExampleMenuPositionRight = () => (
  <Tab
    grid ={{ tabWidth: 6 ,paneWidth: 10}}
    menu={{  secondary: false, pointing: true ,fluid: true, vertical: true }}
    menuPosition='right'
    panes={panes}
  />
)

export default TabExampleMenuPositionRight