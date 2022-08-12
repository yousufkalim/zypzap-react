import React, { useEffect, useState } from 'react';

import StartedCourse from './StartedCourse';
import EnrolledCourse from './EnrolledCourse';
import Wishlist from './Wishlist';
import ProgressionRoadmap from './ProgressionRoadmap';
import { Store, UpdateStore } from '../../StoreContext';

import MyWallet from './MyWallet';
import Setting from './Setting';

const DashboardRightSideBar2 = ({}) => {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {window.innerWidth < 601 ? (
        <div>
          <div class="Mobdropdown">
            <div>
              <div class="dropbtn" onClick={() => setOpen(!open)}>
                Courses <i class=" CourseDownArrow fa-solid fa-angle-down "></i>
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
            <div class="dropbtn" onClick={() => updateStore({ contentDashboardButton: 'Setting' })}>
              Settings
            </div>
          </div>
          <hr className="line" />
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
