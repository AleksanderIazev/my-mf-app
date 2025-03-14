import React, { Suspense, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styles from './sidebar.module.scss';
import { AlertError } from '../../icons/AlertError';

const cn = require('classnames');

const RemoteRatingBar = React.lazy(() =>
  import('reviews/RemoteRatingBar')
    .then((module) => ({ default: module.RemoteRatingBar }))
    .catch((error) => {
      console.error('Ошибка загрузки виджета', error);
      return {
        default: () => (
          <div className={cn(styles.errorWrapper)}>
            <div className={cn(styles.errorRatingSidebar)}>
              <AlertError />
            </div>
            <p>Сервис отключен</p>
          </div>
        ),
      };
    }),
);

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const toggleOpenSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };
  return (
    <div
      className={cn(styles.sidebarWrapper, {
        [styles.closeSidebar]: !isOpenSidebar,
      })}
    >
      <div className={cn(styles.ratingCell)}>
        <Suspense fallback={<div>Загрузка</div>}>
          <RemoteRatingBar isSidebarOpen={isOpenSidebar} />
        </Suspense>
      </div>
      <button
        type="button"
        className={cn(styles.sidebarToggle)}
        onClick={toggleOpenSidebar}
      >
        {isOpenSidebar ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </button>
    </div>
  );
}
