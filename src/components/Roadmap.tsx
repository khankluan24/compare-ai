import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import * as styles from '@/styles/components/Roadmap';

const Roadmap = () => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [widthCard, setWidthCard] = useState(0);
  const myElementRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const { offsetWidth } = myElementRef.current;
    const width = offsetWidth | 0;
    setWidthCard(width);
  }, [myElementRef]);

  const onNextFrame = () => {
    if (index === 3) {
      setIndex(0);
      setPosition(-(0 * widthCard));
    } else {
      setIndex(index + 1);
      setPosition(-((index + 1) * widthCard));
    }
  };

  const onPrevFrame = () => {
    if (index === 0) {
      setIndex(3);
      setPosition(-(3 * widthCard));
    } else {
      setIndex(index - 1);
      setPosition(-((index - 1) * widthCard));
    }
  };
  return (
    <>
      <section className='section_blog68' id='roadmap'>
        <div className='padding-global'>
          <div className='container-large'>
            <div className='padding-section-large'>
              <div className='margin-bottom margin-medium'>
                <div className='blog68_heading-wrapper'>
                  <div className='blog68_heading'>
                    <div className='max-width-large-2'>
                      <div className='margin-bottom margin-xsmall'>
                        <div className='label'>{"Where we're heading."}</div>
                      </div>
                      <div className='margin-bottom margin-xsmall'>
                        <h2 className='heading'>Roadmap</h2>
                      </div>
                    </div>
                  </div>
                  <div id='w-node-_975f6764-a067-bccc-cf42-4d0fb3d2bb74-1c48dc11' className='div-block-39'>
                    <p className='text-size-medium text-color-white'>
                      {`CompareAi's vision entails creating an ecosystem that encompasses the myriad opportunities within Artificial Intelligence, with a focus on
                      developing the most exceptional iterations of each.`}
                    </p>
                    {/* <a id='w-node-c10bde2d-fec2-e68e-c2ec-71de04c13ffb-1c48dc11' href='#' className='button-primary roadmap w-button'>
                      See the Full Compare-AI Roadmap
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                data-delay='4000'
                data-animation='slide'
                className='blog68_component w-slider'
                data-autoplay='false'
                data-easing='ease'
                data-hide-arrows='false'
                data-disable-swipe='false'
                data-autoplay-limit='0'
                data-nav-spacing='3'
                data-duration='500'
                data-infinite='false'
                fs-cmsslider-element='slider'
                role='region'
                aria-label='carousel'>
                <div className='blog68_mask w-slider-mask' id='w-slider-mask-0'>
                  <div aria-live='off' aria-atomic='true' className='w-slider-aria-label' data-wf-ignore=''>
                    Slide 3 of 4.
                  </div>
                  <div
                    ref={myElementRef}
                    className='blog68_slide w-slide'
                    aria-label='1 of 4'
                    role='group'
                    aria-hidden='true'
                    css={styles.transform(position)}
                    // style='transform: translateX(-776.906px); opacity: 1'
                  >
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        <div className='timeline-card_left-col background-phase-1' aria-hidden='true'>
                          <div className='text-block-13-copy' aria-hidden='true'>
                            Phase
                          </div>
                          <div className='text-block-15' aria-hidden='true'>
                            1.0
                          </div>
                          <div className='small-divider' aria-hidden='true'></div>
                          <div className='text-block-16' aria-hidden='true'>
                            Building the Platform (Pre-Launch)
                          </div>
                        </div>
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-richtext' aria-hidden='true'>
                            <p aria-hidden='true'></p>
                          </div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Core Platform Development
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Constructing the technical infrastructure for the smart price comparison platform</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Establishing Online Presence
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Building the brand through a website and social media channels.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Initial Marketing Efforts
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Applying marketing strategies to increase product awareness.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Testnet Implementation
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Conducting testnet trials to collect user feedback.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='blog68_slide w-slide'
                    aria-label='2 of 4'
                    role='group'
                    aria-hidden='true'
                    // style='transform: translateX(-776.906px); opacity: 1'
                    css={styles.transform(position)}>
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        <div className='timeline-card_left-col background-phase-2' aria-hidden='true'>
                          <div className='text-block-13-copy' aria-hidden='true'>
                            Phase
                          </div>
                          <div className='text-block-15' aria-hidden='true'>
                            2.0
                          </div>
                          <div className='small-divider' aria-hidden='true'></div>
                          <div className='text-block-16' aria-hidden='true'>
                            Gearing Up
                          </div>
                        </div>
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-richtext' aria-hidden='true'>
                            <p aria-hidden='true'></p>
                          </div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Strategic Partnerships
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Forming partnerships to improve product offerings.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Community Engagement
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Building an active online community.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Waitlist
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Early user can use AI bot and receive airdrop.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Private Sale
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>{`For Kols and VCs.`}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item margin-top-20' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Product live - ShopperAI
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p aria-hidden='true'>Full transition to mainnet to provide official services.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='blog68_slide w-slide'
                    aria-label='3 of 4'
                    role='group'
                    //  style='transform: translateX(-776.906px); opacity: 1'
                    css={styles.transform(position)}>
                    <div className='collection-item-4 w-dyn-item'>
                      <div className='timeline-card'>
                        <div
                          //   style="
                          //   background-image: url('https://assets-global.website-files.com/6287af1fae85313d51532cc9/6334515cb90e184b1302e26a_CleanShot%202022-09-28%20at%2009.49.48.png');
                          // "
                          className='timeline-card_left-col background-phase-3'>
                          <div className='text-block-13-copy'>Phase</div>
                          <div className='text-block-15'>3.0</div>
                          <div className='small-divider'></div>
                          <div className='text-block-16'>Expansion and Growth</div>
                        </div>
                        <div className='timeline-card_right-col'>
                          <div className='rich-text-block-2 w-richtext'>
                            <p></p>
                          </div>
                          <div className='w-dyn-list'>
                            <div role='list' className='w-dyn-items'>
                              <div role='listitem' className='w-dyn-item'>
                                <div className='highlight-item'>
                                  <div className='div-block-30'>
                                    <div className='div-block-33'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible'>Complete</div>
                                      <div className='timeline-badge planned'>Planned</div>
                                    </div>
                                    <div className='div-block-34'>
                                      <div className='text-block-12'>Launching</div>
                                      <div className='paragraph-2 w-richtext'>
                                        <p>CAI and push hard marketing.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item'>
                                <div className='highlight-item'>
                                  <div className='div-block-30'>
                                    <div className='div-block-33'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible'>Complete</div>
                                      <div className='timeline-badge planned'>Planned</div>
                                    </div>
                                    <div className='div-block-34'>
                                      <div className='text-block-12'>User Base Expansion, focus Black Friday</div>
                                      <div className='paragraph-2 w-richtext'>
                                        <p>Growing the users for ShopperAI.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item '>
                                <div className='highlight-item'>
                                  <div className='div-block-30'>
                                    <div className='div-block-33'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible'>Complete</div>
                                      <div className='timeline-badge planned'>Planned</div>
                                    </div>
                                    <div className='div-block-34'>
                                      <div className='text-block-12'></div>
                                      <div className='paragraph-2 w-richtext'>
                                        <p className=''>Upgrading the UX/UI </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item margin-top-medium'>
                                <div className='highlight-item'>
                                  <div className='div-block-30'>
                                    <div className='div-block-33'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible'>Complete</div>
                                      <div className='timeline-badge planned'>Planned</div>
                                    </div>
                                    <div className='div-block-34'>
                                      <div className='text-block-12'>Testnet for ScanAI and developing SolisAI</div>
                                      <div className='paragraph-2 w-richtext'>
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='blog68_slide w-slide'
                    aria-label='4 of 4'
                    role='group'
                    aria-hidden='true'
                    // style='transform: translateX(-776.906px); opacity: 1'
                    css={styles.transform(position)}>
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        <div
                          //   style="
                          //   background-image: url('https://assets-global.website-files.com/6287af1fae85313d51532cc9/6334514d43baac7ee03881a4_CleanShot%202022-09-28%20at%2009.50.10.png');
                          // "
                          className='timeline-card_left-col background-phase-4'
                          aria-hidden='true'>
                          <div className='text-block-13-copy' aria-hidden='true'>
                            Phase
                          </div>
                          <div className='text-block-15' aria-hidden='true'>
                            4.0
                          </div>
                          <div className='small-divider' aria-hidden='true'></div>
                          <div className='text-block-16' aria-hidden='true'>
                            Growth
                          </div>
                        </div>
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-dyn-bind-empty w-richtext' aria-hidden='true'></div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned w-condition-invisible' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Launching ScanAI and run huge marketing
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p className='margin-bottom-medium'> </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        CEX listing
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p className='margin-bottom-medium'> </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Implementing a referral program to promote community growth
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p className='margin-bottom-medium'> </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='listitem' className='w-dyn-item' aria-hidden='true'>
                                <div className='highlight-item' aria-hidden='true'>
                                  <div className='div-block-30' aria-hidden='true'>
                                    <div className='div-block-33' aria-hidden='true'>
                                      <div
                                        //   style='
                                        //   transform: translate3d(0px, 0px, 0px)
                                        //     scale3d(0.954811, 0.954811, 1)
                                        //     rotateX(0deg) rotateY(0deg)
                                        //     rotateZ(-90deg) skew(0deg, 0deg);
                                        //   transform-style: preserve-3d;
                                        //   opacity: 0.829957;
                                        //   will-change: opacity, transform;
                                        // '
                                        className='timeline-badge in-progress w-condition-invisible'
                                        aria-hidden='true'>
                                        In Progress
                                      </div>
                                      <div className='timeline-badge complete w-condition-invisible' aria-hidden='true'>
                                        Complete
                                      </div>
                                      <div className='timeline-badge planned' aria-hidden='true'>
                                        Planned
                                      </div>
                                    </div>
                                    <div className='div-block-34' aria-hidden='true'>
                                      <div className='text-block-12' aria-hidden='true'>
                                        Focus to build Eva Assistant
                                      </div>
                                      <div className='paragraph-2 w-richtext' aria-hidden='true'>
                                        <p className='margin-bottom-medium'> </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='slide68_arrow left w-slider-arrow-left'
                  role='button'
                  tabIndex={0}
                  aria-controls='w-slider-mask-0'
                  aria-label='previous slide'
                  onClick={onPrevFrame}>
                  <ArrowBackIcon></ArrowBackIcon>
                </div>
                <div
                  className='slide68_arrow w-slider-arrow-right'
                  role='button'
                  tabIndex={0}
                  aria-controls='w-slider-mask-0'
                  aria-label='next slide'
                  onClick={onNextFrame}>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </div>
                <div className='blog68_slide-nav w-slider-nav w-slider-nav-invert w-round'>
                  <div
                    className='w-slider-dot'
                    data-wf-ignore=''
                    aria-label='Show slide 1 of 4'
                    aria-pressed='false'
                    role='button'
                    tabIndex={-1}
                    // style='margin-left: 3px; margin-right: 3px'
                  ></div>
                  <div
                    className='w-slider-dot'
                    data-wf-ignore=''
                    aria-label='Show slide 2 of 4'
                    aria-pressed='false'
                    role='button'
                    tabIndex={-1}
                    // style='margin-left: 3px; margin-right: 3px'
                  ></div>
                  <div
                    className='w-slider-dot w-active'
                    data-wf-ignore=''
                    aria-label='Show slide 3 of 4'
                    aria-pressed='true'
                    role='button'
                    tabIndex={0}
                    // style='margin-left: 3px; margin-right: 3px'
                  ></div>
                  <div
                    className='w-slider-dot'
                    data-wf-ignore=''
                    aria-label='Show slide 4 of 4'
                    aria-pressed='false'
                    role='button'
                    tabIndex={-1}
                    // style='margin-left: 3px; margin-right: 3px'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='section-timeline'>
        <div className='page-padding hero'>
          <div className='container-large'></div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
