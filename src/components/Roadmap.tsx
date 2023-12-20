import { useRef, MutableRefObject } from 'react';
import { ROADMAP } from '@/constants';

const Roadmap = () => {
  const myElementRef: MutableRefObject<any> = useRef(null);

  const renderPhaseItem = (arr: any[]) =>
    arr.map((el, index) => (
      <div role='listitem' className='w-dyn-item' aria-hidden='true' key={index}>
        <div className='highlight-item' aria-hidden='true'>
          <div className='div-block-30' aria-hidden='true'>
            <div className='div-block-34' aria-hidden='true'>
              <div className={`text-block-12 ${el.DONE ? '' : 'going'}`} aria-hidden='true'>
                {el.CONTENT}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

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
                        <div className='label'>Let&apos;s get to work</div>
                      </div>
                      <div className='margin-bottom margin-xsmall'>
                        <h2 className='heading'>Roadmap</h2>
                      </div>
                    </div>
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
                  <div ref={myElementRef} className='blog68_slide w-slide' aria-label='1 of 4' role='group' aria-hidden='true'>
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-richtext' aria-hidden='true'>
                            <p aria-hidden='true'>Phase 1: Development</p>
                          </div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              {renderPhaseItem(ROADMAP.PHASE1.ITEMS)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='blog68_slide w-slide' aria-label='2 of 4' role='group' aria-hidden='true'>
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-richtext' aria-hidden='true'>
                            <p aria-hidden='true'>Phase 2: Launching & Scaling</p>
                          </div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              {renderPhaseItem(ROADMAP.PHASE2.ITEMS)}
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
                  >
                    <div className='collection-item-4 w-dyn-item'>
                      <div className='timeline-card'>
                        {/* <div className='timeline-card_left-col background-phase-3'>
                          <div className='text-block-13-copy'>Phase</div>
                          <div className='text-block-15'>3.0</div>
                          <div className='small-divider'></div>
                          <div className='text-block-16'>Expansion and Growth</div>
                        </div> */}
                        <div className='timeline-card_right-col'>
                          <div className='rich-text-block-2 w-richtext'>
                            <p>Phase 3: Refining and expanding ACE ecosystem</p>
                          </div>
                          <div className='w-dyn-list'>
                            <div role='list' className='w-dyn-items'>
                              {renderPhaseItem(ROADMAP.PHASE3.ITEMS)}
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
                  >
                    <div className='collection-item-4 w-dyn-item' aria-hidden='true'>
                      <div className='timeline-card' aria-hidden='true'>
                        {/* <div className='timeline-card_left-col background-phase-4' aria-hidden='true'>
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
                        </div> */}
                        <div className='timeline-card_right-col' aria-hidden='true'>
                          <div className='rich-text-block-2 w-richtext' aria-hidden='true'>
                            <p aria-hidden='true'>Phase 4: Adoption</p>
                          </div>
                          <div className='w-dyn-list' aria-hidden='true'>
                            <div role='list' className='w-dyn-items' aria-hidden='true'>
                              {renderPhaseItem(ROADMAP.PHASE4.ITEMS)}
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
      </section>
    </>
  );
};

export default Roadmap;
