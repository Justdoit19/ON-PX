import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> ON-PX에 오신 것을 환영합니다.  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
