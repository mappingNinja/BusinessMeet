import React, { useContext, useEffect, useState } from 'react'
import '../common/scss/pages/settings.scss'
import '../common/scss/pages/support.scss'
import Header from '../common/header'
import { ReactComponent as ArrowDownIcon } from '../assets/images/arrow-down.svg'
import ProductImage from '../assets/images/product-image1.png'
import CompanyLogo from '../assets/images/company-logo.png'
import { ReactComponent as AttachmentIcon } from '../assets/images/attachment.svg'
import { Link, useNavigate } from 'react-router-dom';
function SupportOrder () {
  return (
    <>
      <Header home />

      <div className='grey-bg'>
        <div className='container-fluid support-page'>
        <div className='page-title'>
              <h6>BusiMeet Help Center | 24x7 Customer Care Support</h6>
            </div>
          <div className='layout-grid-box-column2 '>
            
            <div className='layout-grid layout-grid--left'>
              
              <div className='card sidebar-nav support-sidebar'>
              <div className='sidebar-title'>
                <h6>TYPE OF ISSUE</h6>
                <a className='collapse-button mobile-view' data-toggle='collapse' href='#collapseSidebar' role='button' aria-expanded='false' aria-controls='collapseSearch'><ArrowDownIcon /></a>
              </div>
                <ul className='collapse desktop-view'  id='collapseSidebar'>
                  <li className='sidebar-nav--item'><Link to={'/support'}>Help with your issues</Link></li>
                  <li className='sidebar-nav--item active'>Help with your order</li>
                </ul>
              </div>
            </div>
            <div className='layout-grid layout-grid--main'>
              <div className='card small-box'>
                <div className='card-body'>
                  <div className='support-issue'>
                  <div className='orders'>
                      <div className='order-item'>
                        <div className='image-block'><img src={ProductImage} /></div>
                        <div className='content-block'>
                          <h6>Black+Decker 650W Rebating Planer, KW712</h6>
                          <div className='company-name'>
                            <img src={CompanyLogo} />
                            ABC Group
                          </div>
                          <ul>
                          <li><label>Order ID</label>:<span>#34323423423523</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='section-title'>
                      <h6>Help with Your Order</h6>
                    </div>
                    <div className='form-field'>
                      <label className='form-label'>Select Subject About Your Issue</label>
                      <select className='form-input'><option>Select Subject</option></select>
                    </div>
                    <div className='form-field'>
                      <label className='form-label'>Questions Title</label>
                      <input type='text' name='q_title' id='q_title' className='form-input' placeholder='Enter Your Questions Title' />
                    </div>
                    <div className='form-field'>
                      <label className='form-label'>Query Discription</label>
                      <input type='text' name='q_desc' id='q_desc' className='form-input' placeholder='Enter Your Query Discription' />
                    </div>
                    <div className='form-field'>
                      <label className='form-label'>Upload any Query Releted Attachment </label>
                      <div className='file-upload'>
                        <input type='file' id='upload_attachement' />
                        <label htmlFor='upload_attachement'>Select Attachment<span className='icon'><AttachmentIcon /></span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer'>
                  <button className='button button-secondary'>Cancel</button>
                  <button className='button button-primary'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportOrder
