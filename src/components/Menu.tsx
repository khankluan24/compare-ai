import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import { useState } from 'react';
import * as styles from '@/styles/components/Menu';

const Menu = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  return (
    <div>
      <section className='section-contact-modal3'>
        <div className='page-padding-2'>
          <div className='container-large'>
            <div className='padding-vertical'>
              <div className='nav-wrapper'>
                <a href='/' aria-current='page' className='navbar6_logo-link w-nav-brand w--current'>
                  <Image src='/logo.png' alt='close' width={150} height={70}></Image>
                </a>
                <div className='button-row is-button-row-center'>
                  <div className='contact-modal3_component-2' css={styles.contactModal3Component2(isShowNav)}>
                    <div className='contact-modal3_content-wrapper-2' css={styles.contactModal3ContentWrapper2(isShowNav)}>
                      <div className='margin-bottom margin-large'>
                        <div className='text-align-center-2'>
                          <div className='max-width-large-2 align-center'>
                            <div className='margin-bottom margin-xsmall'>
                              <div className='div-block-19'>
                                <Image src='/logo.png' alt='close' width={150} height={70}></Image>
                                <div className='nav-link-list'>
                                  <a href='#' aria-current='page' className='nav-link w-inline-block w--current'>
                                    <div>Home</div>
                                  </a>
                                  <a href='#' className='nav-link w-inline-block'>
                                    <div>Roadmap</div>
                                  </a>
                                  <a href='#' className='nav-link hidden w-inline-block'>
                                    <div>Treasury Report</div>
                                  </a>
                                  <a href='#' className='nav-link w-inline-block'>
                                    <div>Careers</div>
                                  </a>
                                </div>
                                <a href='https://t.me/CompareAi_Portal' target='_blank' className='button-primary is-in-nav is-in-mobile w-inline-block'>
                                  <div className='button-text'>Invest</div>
                                </a>
                                <div className='w-layout-grid social-link-list mobile'>
                                  <a
                                    id='w-node-b87d70e6-4c6b-380a-71c4-72a39b280e44-6d0eefca'
                                    href='https://t.me/CompareAi_Portal'
                                    target='_blank'
                                    className='social-link-wrappper w-inline-block'>
                                    <TelegramIcon></TelegramIcon>
                                    <div className='social-link-text'>Telegram</div>
                                  </a>
                                  <a
                                    id='w-node-b87d70e6-4c6b-380a-71c4-72a39b280e48-6d0eefca'
                                    href='https://twitter.com/CompareAi'
                                    target='_blank'
                                    className='social-link-wrappper w-inline-block'>
                                    <TwitterIcon></TwitterIcon>
                                    <div className='social-link-text'>Twitter</div>
                                  </a>
                                </div>
                                <a href='https://www.sphere.finance/terms' className='nav-link is-small w-inline-block'>
                                  <div>Terms &amp;&nbsp;Conditions</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefde' className='contact-modal3_close-button-2 w-inline-block'>
                        <Image src='/close_light.svg' alt='close' width={19} height={19} onClick={() => setIsShowNav(!isShowNav)}></Image>
                      </a>
                    </div>
                    <div
                      data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefe0'
                      className='contact-modal3_background-overlay-2'
                      onClick={() => setIsShowNav(!isShowNav)}></div>
                  </div>
                  <a href='https://t.me/CompareAi_Portal' target='_blank' className='button-primary is-in-nav w-inline-block'>
                    <div className='button-text'>Invest</div>
                  </a>
                  <a data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefe1' className='link-block-3 w-inline-block' onClick={() => setIsShowNav(!isShowNav)}>
                    <div className='menu-icon4_wrapper'>
                      <div className='menu-icon4_line-top-2'></div>
                      <div className='menu-icon4_line-middle-2'>
                        <div className='menu-icon_line-middle-top'></div>
                        <div className='menu-icon_line-middle-base-2'></div>
                      </div>
                      <div className='menu-icon4_line-bottom-2'></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Menu;
