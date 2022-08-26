import React, { useEffect, useState } from 'react';

import StartedCourse from './StartedCourse';
import EnrolledCourse from './EnrolledCourse';
import Wishlist from './Wishlist';
import ProgressionRoadmap from './ProgressionRoadmap';
import { Store, UpdateStore } from '../../StoreContext';
import DownArrow from '../../assets/icons/downarrow.svg';
import MyWallet from './MyWallet';
import Setting from './Setting';

const DashboardRightSideBar2 = ({}) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('courses');

  const { contentDashboardButton } = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    if (contentDashboardButton == 'Setting') {
      updateStore({ contentDashboardButton: 'Setting' });
    }
  }, []);

  const handleSelectCourseType = (i) => {
    updateStore({ contentDashboardButton: i });
    setOpen(!open);
  };
  const handleSettings = (i) => {
    updateStore({ contentDashboardButton: 'Setting' });
    setTab(i);
  };

  const handleOpen = (i) => {
    setOpen(!open);
    setTab(i);
  };
  return (
    <>
      {window.innerWidth < 601 ? (
        <div>
          <div class="Mobdropdown">
            <div>
              <div class="dropbtn" onClick={() => handleOpen('courses')}>
                Courses <img src={DownArrow} alt="img" className="downarrow" />
                {tab === 'courses' ? (
                  <hr
                    style={{
                      width: '17%',
                      marginTop: '3%',
                      position: 'absolute',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderImage: 'linear-gradient(45deg,#662f88, #20bf55) 1 ',
                    }}
                  />
                ) : (
                  ''
                )}
              </div>
              {open && (
                <div class="dropdown-content1">
                  <a href="#" onClick={() => handleSelectCourseType('Started Courses')}>
                    Started Courses
                  </a>
                  <a href="#" onClick={() => handleSelectCourseType('Enrolled Courses')}>
                    Enrolled Courses
                  </a>
                </div>
              )}
            </div>
            <div class="dropbtn " onClick={() => handleSettings('settings')}>
              Settings
            </div>
          </div>
          {tab === 'settings' ? (
            <hr
              style={{
                width: '18%',
                position: 'absolute',
                marginLeft: '75vw',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderImage: 'linear-gradient(45deg,#662f88, #20bf55) 1 ',
                marginTop: '3%',
              }}
            />
          ) : (
            ''
          )}
          <hr className="line" />
          {tab === 'courses' ? (
            <>
              {' '}
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  marginTop: '22px',
                  marginLeft: '17px',
                }}
              >
                {contentDashboardButton === 'Courses' ||
                contentDashboardButton === 'Started Courses'
                  ? 'Started Courses'
                  : 'Enrolled Courses'}
              </p>
              <hr className="line" />{' '}
            </>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}

      {contentDashboardButton == 'Courses' && <StartedCourse />}
      {contentDashboardButton == 'Started Courses' && <StartedCourse />}
      {contentDashboardButton == 'Enrolled Courses' && <EnrolledCourse />}
      {contentDashboardButton == 'Wishlist' && <Wishlist />}
      {contentDashboardButton == 'My Walle' && <MyWallet />}
      {contentDashboardButton == 'Progression Roadma' && <ProgressionRoadmap />}
      {contentDashboardButton == 'Setting' && <Setting />}
      {/* {contentDashboardButton === "Setting" ? <Setting /> : null} */}
    </>
  );
};

export default DashboardRightSideBar2;
