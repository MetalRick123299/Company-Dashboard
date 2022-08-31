import './App.css';
import { useState } from 'react';
import mockData from './MOCK_DATA.json';

import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WorkIcon from '@mui/icons-material/Work';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PieChartIcon from '@mui/icons-material/PieChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
// Person Icon
// Settings Icon
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import NavIcon from './components/NavIcon';
import GridItem from './components/GridItem';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function App() {
  const [currData, setCurrData] = useState({});

  const toggleSidebar = (e, index) => {
    const popUp = document.querySelector('.popUp');
    if (!index && index !== 0) return popUp.classList.remove('active');

    if (!popUp.classList.contains('active')) {
      popUp.classList.add('active');
    }
    const currData = mockData[index];
    setCurrData(() => currData);
  };

  return (
    <div className="App">
      <nav>
        <div className="profileCorner">
          <img src="https://via.placeholder.com/50" alt="Profile Icon" />
          <div className="name">
            <div>Kelly Cheng</div>
            <span>Copper</span>
          </div>
          <CloseIcon fontSize="medium" />
        </div>
        <div className="navContent">
          <NavIcon icon={<HomeIcon fontSize="medium" />} text="Dashboard" />
        </div>
        <div className="navContent">
          <NavIcon icon={<GpsFixedIcon fontSize="medium" />} text="Leads" />
          <NavIcon icon={<PersonIcon fontSize="medium" />} text="People" />
          <NavIcon icon={<BusinessIcon fontSize="medium" />} text="Companies" />
          <NavIcon
            icon={<DoubleArrowIcon fontSize="medium" />}
            text="Pipelines"
          />
          <NavIcon icon={<WorkIcon fontSize="medium" />} text="Projects" />
        </div>
        <div className="navContent">
          <NavIcon icon={<CheckBoxIcon fontSize="medium" />} text="Tasks" />
          <NavIcon
            icon={<SlowMotionVideoIcon fontSize="medium" />}
            text="Marketing Tools"
          />
          <NavIcon
            icon={<LocalPostOfficeIcon fontSize="medium" />}
            text="My Tracked Emails"
          />
          <NavIcon icon={<PieChartIcon fontSize="medium" />} text="Reports" />
          <NavIcon
            icon={<AssessmentIcon fontSize="medium" />}
            text="Legacy Reports"
          />
        </div>
        <div className="navContent">
          <NavIcon icon={<SettingsIcon fontSize="medium" />} text="Settings" />
        </div>
        <div className="copper">
          :copper
          <MoreHorizIcon fontSize="large" />
        </div>
      </nav>
      <header>
        <span>People</span>
        <div className="textInput">
          <SearchIcon htmlColor="gray" />
          <input
            type="text"
            placeholder="Search by name email domain or phone number"
          />
        </div>
        <div>
          <AddIcon fontSize="medium" />
          <NotificationsIcon fontSize="medium" />
          <HelpIcon fontSize="medium" htmlColor="gray" />
        </div>
      </header>
      <div className="subHeading">
        <div className="dropDowns">
          <span>
            All People (15963)
            <ArrowDropDownIcon fontSize="small" />
          </span>
          <span>
            Add New
            <ArrowDropDownIcon fontSize="small" />
          </span>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonIcon />
          <SettingsIcon />
          <FilterListIcon />
          Filters
        </div>
      </div>
      <main>
        <div className="container shadow">
          <div className="category firstName">
            <input type="checkbox" name="checkbox" value="" />
            First Name
            <SortIcon fontSize="small" sx={{ rotate: '180deg' }} />
          </div>
          <div className="category">
            Company
            <SortIcon fontSize="small" />
          </div>
          <div className="category">
            Title
            <SortIcon fontSize="small" />
          </div>
          <div className="category">
            Email
            <SortIcon fontSize="small" />
          </div>
          <div className="category">
            Owned By
            <SortIcon fontSize="small" />
          </div>
          <div className="category">Street</div>
          <div className="category">
            Created
            <SortIcon fontSize="small" />
          </div>
          <div className="category">
            Last Contacted
            <SortIcon fontSize="small" />
          </div>
        </div>
        {mockData.map((data, index) => {
          return (
            <GridItem
              key={data.id}
              index={index}
              props={data}
              onClick={toggleSidebar}
            />
          );
        })}
        {/* {console.log(mockData[0])} */}
        {/* <GridItem key={mockData[0].id} props={mockData[0]} /> */}
      </main>
      <div className="popUp active">
        <div className="popUpIcons">
          <ArrowForwardIcon
            onClick={toggleSidebar}
            sx={{
              cursor: 'pointer',
            }}
          />
          <span>
            <OpenInNewIcon />
            <StarBorderIcon />
            <MoreVertIcon />
          </span>
        </div>
        <div className="mainDetails">
          <span className="initials">TO</span>
          <div className="name">
            <div>Kelly Cheng</div>
            <span>Copper</span>
          </div>
        </div>
        <div className="tabs">
          <span>Details</span>
          <span>Activity</span>
          <span>Related</span>
        </div>
        <div className="fullDetails">
          <div className="detail">
            <div className="nameDetail">
              Name <span className="red">*</span>
            </div>
            <span>{currData.first_name || 'Add Name'}</span>
          </div>
          <div className="detail">
            Company
            <span>{currData.company || 'Add Company'}</span>
          </div>
          <div className="detail">
            Title
            <span>{currData.title || 'Add Title'}</span>
          </div>
          <div className="detail">
            Work Email
            <span>{currData.email || 'Add Work Email'}</span>
          </div>
          <div className="detail">
            Work Phone
            <span>412412421421</span>
          </div>
          <div className="detail icon">
            <span>
              Rating
              <span>- Select Rating -</span>
            </span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div className="detail icon">
            <span>
              Status
              <span>- Select Status -</span>
            </span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div className="detail icon">
            <span>
              Recycled Reasons
              <span>- Select Recycled Reasons -</span>
            </span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div className="detail icon">
            <span>
              Owner
              <span>{currData.owned_by || 'Add Owner'}</span>
            </span>
            <CloseIcon fontSize="small" />
          </div>
          <div className="detail icon">
            <span>
              AE Assignee
              <span>- Select Recycled Reasons -</span>
            </span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div className="detail">
            Account Owner
            <input type="checkbox" />
          </div>
          <div className="detail">Company Size</div>
        </div>
      </div>
      <LiveHelpIcon
        fontSize="large"
        sx={{
          position: 'absolute',
          top: '93%',
          left: '96%',
          scale: '200%',
          color: '#FF3465',
          zIndex: 50,
        }}
      />
    </div>
  );
}

export default App;
