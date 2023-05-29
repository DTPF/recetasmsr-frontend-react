import { Outlet } from 'react-router-dom';
import HeaderMain from '../../components/basic/layout/header';
import FooterBasic from '../../components/basic/layout/footer/FooterBasic';
import './LayoutBasic.scss'

export default function LayoutMain() {
  return (
    <RenderLayout />
  );
}

function RenderLayout() {
  return (
    <div className='layout-basic'>
      <HeaderMain />

      <div className='layout-basic__main'>
        <Outlet />
      </div>

      <FooterBasic />
    </div>
  )
}