
import React from 'react';
import styled from 'styled-components';
// import {stack} from 'react-icons-kit/icomoon/stack';

const Services = () => {
    return (<>
        <div id='services' style={{minHeight:'80vh'}}>
        <div className="container">
        <H1 className='text-center pt-0 pb-5'>Services</H1>
        <div className="row py-auto">
        <div class="card col-md-8 col-lg-3 mx-auto py-auto my-3" style={{width: "18rem"}}>
    <svg id="mobile-phone" className="card-img-top px-auto" viewBox="0 0 511.992 511.992"><title>mobile-phone</title><rect x="227.631" y="409.592" style={{fill:"#A4C2F7"}} width="204.8" height="93.867"></rect><path style={{fill:"#E3E7F2"}} d="M425.057,277.859l-94.888,94.888c-3.671,3.671-8.651,5.734-13.843,5.734s-10.172-2.063-13.843-5.734 l-82.622-82.623h-56.23c-4.933,2.411-18.389-6.301-13.223-1.867l92.261,91.906c0.63,0.63,1.363,1.084,2.029,1.655v27.772h170.667 v-38.487c14.26-10.659,23.417-26.792,25.258-44.501C442.463,308.895,436.82,291.224,425.057,277.859L425.057,277.859z"></path><circle style={{fill:"#7FACFA"}} cx="308.697" cy="456.525" r="21.333"></circle><g> <path style={{fill:"#E3E7F2"}} d="M295.08,99.851c12.243-5.357,19.433-18.198,17.602-31.435 c-1.831-13.237-12.238-23.644-25.475-25.475c-13.237-1.831-26.079,5.359-31.435,17.602L295.08,99.851z"></path> <path style={{fill:"#E3E7F2"}} d="M337.747,142.517c12.243-5.357,19.433-18.198,17.602-31.435 c-1.831-13.237-12.238-23.644-25.475-25.475c-13.237-1.831-26.079,5.359-31.435,17.602L337.747,142.517z"></path> <path style={{fill:"#E3E7F2"}} d="M380.414,185.184c12.243-5.357,19.433-18.198,17.602-31.435 c-1.831-13.237-12.238-23.644-25.475-25.475s-26.079,5.359-31.435,17.602L380.414,185.184z"></path> <path style={{fill:"#E3E7F2"}} d="M423.081,227.851c12.243-5.357,19.433-18.198,17.602-31.435 c-1.831-13.237-12.238-23.644-25.475-25.475c-13.237-1.831-26.079,5.359-31.435,17.602L423.081,227.851z"></path> </g><path d="M435.23,240L209.489,14.259c-3.671-3.671-8.651-5.734-13.843-5.734 c-5.192,0-10.172,2.063-13.843,5.734L76.741,119.32c-3.671,3.671-5.734,8.651-5.734,13.843c0,5.192,2.063,10.172,5.734,13.843 l83.708,83.708c1.054-0.166,2.115-0.274,3.181-0.323h85.333c16.495,0,29.867,13.372,29.867,29.867 c0,16.495-13.372,29.867-29.867,29.867H219.86l82.622,82.622c3.671,3.671,8.651,5.734,13.843,5.734s10.172-2.063,13.843-5.734 L435.23,267.686C442.875,260.041,442.875,247.645,435.23,240z"></path><path style={{fill:"#A4C2F7"}} d="M209.489,14.259c-3.671-3.671-8.651-5.734-13.843-5.734c-5.192,0-10.172,2.063-13.843,5.734 L76.741,119.32c-3.671,3.671-5.734,8.651-5.734,13.843c0,5.192,2.063,10.172,5.734,13.843l26.073,26.073L235.562,40.332 L209.489,14.259z"></path><g> <path style={{fill:"#428DFF"}} d="M432.431,511.992h-204.8c-2.264,0.001-4.435-0.897-6.035-2.498 c-1.601-1.601-2.499-3.772-2.498-6.035v-93.867c-0.001-2.264,0.897-4.435,2.498-6.035c1.601-1.601,3.772-2.499,6.035-2.498h204.8 c2.264-0.001,4.435,0.897,6.035,2.498c1.601,1.601,2.499,3.772,2.498,6.035v93.867c0.001,2.264-0.897,4.435-2.498,6.035 C436.865,511.094,434.694,511.993,432.431,511.992L432.431,511.992z M236.164,494.925h187.733v-76.8H236.164V494.925z"></path> <path style={{fill:"#428DFF"}} d="M364.164,511.992H227.631c-2.264,0.001-4.435-0.897-6.035-2.498 c-1.601-1.601-2.499-3.772-2.498-6.035v-93.867c-0.001-2.264,0.897-4.435,2.498-6.035c1.601-1.601,3.772-2.499,6.035-2.498h80.433 c35.68,0.038,64.595,28.953,64.633,64.633v37.767c0.001,2.264-0.897,4.435-2.498,6.035 C368.599,511.094,366.428,511.993,364.164,511.992z M236.164,494.925h119.467v-29.233c-0.032-26.257-21.31-47.535-47.567-47.567 h-71.9V494.925z"></path> <path style={{fill:"#428DFF"}} d="M308.697,486.392c-16.495,0-29.867-13.372-29.867-29.867c0-16.495,13.372-29.867,29.867-29.867 s29.867,13.372,29.867,29.867C338.544,473.012,325.184,486.372,308.697,486.392z M308.697,443.725c-7.069,0-12.8,5.731-12.8,12.8 s5.731,12.8,12.8,12.8s12.8-5.731,12.8-12.8C321.49,449.459,315.763,443.733,308.697,443.725z"></path> <path style={{fill:"#428DFF"}} d="M295.081,108.383c-2.263,0-4.433-0.9-6.033-2.5l-39.309-39.308 c-2.485-2.489-3.192-6.245-1.783-9.467c6.893-15.737,23.405-24.977,40.423-22.62c17.018,2.357,30.397,15.736,32.754,32.754 c2.357,17.018-6.882,33.53-22.62,40.423C297.431,108.139,296.262,108.383,295.081,108.383z M266.481,59.183l29.958,29.958 c6.383-5.111,9.279-13.423,7.454-21.393s-8.049-14.194-16.019-16.019C279.903,49.904,271.591,52.8,266.481,59.183L266.481,59.183z "></path> <path style={{fill:"#428DFF"}} d="M337.747,151.05c-2.263,0-4.433-0.9-6.033-2.5l-39.308-39.308 c-2.485-2.489-3.192-6.245-1.783-9.467c6.893-15.737,23.405-24.977,40.423-22.62c17.018,2.357,30.397,15.736,32.754,32.754 c2.357,17.018-6.882,33.53-22.62,40.423C340.098,150.806,338.929,151.05,337.747,151.05L337.747,151.05z M309.147,101.85 l29.958,29.958c6.383-5.111,9.279-13.423,7.454-21.393s-8.049-14.194-16.019-16.019C322.57,92.571,314.258,95.467,309.147,101.85 L309.147,101.85z"></path> <path style={{fill:"#428DFF"}} d="M380.414,193.717c-2.263,0-4.433-0.9-6.033-2.5l-39.308-39.308 c-2.485-2.489-3.192-6.245-1.783-9.467c6.893-15.737,23.405-24.977,40.423-22.62c17.018,2.357,30.397,15.736,32.754,32.754 c2.357,17.018-6.882,33.53-22.62,40.423C382.765,193.473,381.596,193.717,380.414,193.717z M351.814,144.517l29.958,29.958 c6.383-5.111,9.279-13.423,7.454-21.393c-1.825-7.971-8.049-14.195-16.019-16.019 C365.237,135.238,356.925,138.134,351.814,144.517z"></path> <path style={{fill:"#428DFF"}} d="M423.081,236.383c-2.263,0-4.433-0.9-6.033-2.5l-39.308-39.308 c-2.485-2.489-3.192-6.245-1.783-9.467c6.893-15.737,23.405-24.977,40.423-22.62c17.018,2.357,30.397,15.736,32.754,32.754 c2.357,17.018-6.882,33.53-22.62,40.423C425.431,236.139,424.262,236.383,423.081,236.383L423.081,236.383z M394.481,187.183 l29.958,29.958c6.383-5.111,9.279-13.423,7.454-21.393c-1.825-7.971-8.049-14.195-16.019-16.019 C407.903,177.904,399.591,180.8,394.481,187.183L394.481,187.183z"></path> </g><path style={{fill:"#E3E7F2"}} d="M163.631,230.392h85.333c16.495,0,29.867,13.372,29.867,29.867l0,0 c0,16.495-13.372,29.867-29.867,29.867h-85.333c-16.495,0-29.867-13.372-29.867-29.867l0,0 C133.764,243.763,147.136,230.392,163.631,230.392z"></path><path style={{fill:"#428DFF"}} d="M248.964,298.658h-85.333c-21.208,0-38.4-17.192-38.4-38.4s17.192-38.4,38.4-38.4h85.333 c21.208,0,38.4,17.192,38.4,38.4S270.172,298.658,248.964,298.658z M163.631,238.925c-11.782,0-21.333,9.551-21.333,21.333 c0,11.782,9.551,21.333,21.333,21.333h85.333c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H163.631z"></path><circle style={{fill:"#A4C2F7"}} cx="347.097" cy="281.592" r="25.6"></circle><g> <path style={{fill:"#428DFF"}} d="M347.097,315.725c-18.851,0-34.133-15.282-34.133-34.133c0-18.851,15.282-34.133,34.133-34.133 c18.851,0,34.133,15.282,34.133,34.133C381.212,300.435,365.941,315.706,347.097,315.725z M347.097,264.525 c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067 C364.152,272.171,356.518,264.537,347.097,264.525z"></path> <path style={{fill:"#428DFF"}} d="M142.297,102.392c-3.451-0.001-6.562-2.08-7.882-5.268c-1.32-3.188-0.591-6.858,1.849-9.298 l17.067-17.067c3.341-3.281,8.701-3.256,12.012,0.054s3.335,8.671,0.054,12.012L148.33,99.891 C146.732,101.494,144.561,102.394,142.297,102.392z"></path> <path style={{fill:"#428DFF"}} d="M316.322,387c-7.453,0.01-14.605-2.946-19.875-8.217l-82.617-82.625 c-2.44-2.44-3.171-6.11-1.85-9.299c1.321-3.188,4.432-5.268,7.883-5.268h29.1c11.782,0,21.333-9.551,21.333-21.333 c0-11.782-9.551-21.333-21.333-21.333h-85.333c-0.355,0.016-0.709,0.058-1.058,0.125l-1.192,0.15 c-2.575,0.295-5.143-0.608-6.967-2.45l-83.709-83.708c-10.95-10.991-10.95-28.767,0-39.758L175.772,8.225 c11.123-10.617,28.627-10.617,39.75,0l225.742,225.742c5.272,5.271,8.233,12.42,8.233,19.875s-2.962,14.604-8.233,19.875 L336.206,378.783C330.933,384.055,323.779,387.012,316.322,387z M240.464,298.658l68.05,68.058c4.317,4.308,11.308,4.308,15.625,0 L429.197,261.65c4.308-4.314,4.308-11.303,0-15.617L203.456,20.292c-4.318-4.3-11.299-4.3-15.617,0L82.772,125.35 c-4.3,4.321-4.3,11.304,0,15.625l80.883,80.883h85.308c21.208,0,38.4,17.192,38.4,38.4s-17.192,38.4-38.4,38.4H240.464z"></path> <path style={{fill:"#428DFF"}} d="M415.364,418.125H244.697c-2.264,0.001-4.435-0.897-6.035-2.498 c-1.601-1.601-2.499-3.772-2.498-6.035v-23.858L144.381,294.3c-3.843-2.617-4.909-7.814-2.408-11.733 c2.961-4.168,8.65-5.32,13-2.633c1.964,0.862,4,1.551,6.083,2.058c0.832-0.266,1.701-0.401,2.575-0.4h56.233 c2.263,0,4.434,0.899,6.033,2.5l82.617,82.625c4.317,4.308,11.308,4.308,15.625,0l94.884-94.892 c1.616-1.749,3.942-2.666,6.317-2.492c2.358,0.076,4.579,1.126,6.133,2.9c12.829,14.581,19.255,33.709,17.83,53.078 c-1.425,19.369-10.58,37.351-25.405,49.897v34.383c0.001,2.264-0.897,4.435-2.498,6.035 C419.799,417.228,417.628,418.126,415.364,418.125L415.364,418.125z M253.231,401.058h153.6v-29.95 c-0.002-2.681,1.258-5.206,3.4-6.817c22.988-17.156,29.02-49.052,13.884-73.417l-87.909,87.908 c-10.991,10.95-28.767,10.95-39.758,0l-80.117-80.125h-43.392l75.75,75.467c0.742,0.55,1.15,0.858,1.533,1.192 c1.908,1.62,3.008,3.997,3.008,6.5V401.058z"></path> <path style={{fill:"#428DFF"}} d="M102.814,181.617c-2.264,0.003-4.435-0.897-6.033-2.5l-26.075-26.075 c-10.95-10.991-10.95-28.767,0-39.758L175.772,8.225c10.981-10.967,28.769-10.967,39.75,0L241.597,34.3 c1.601,1.6,2.5,3.77,2.5,6.033s-0.899,4.433-2.5,6.033l-132.75,132.75C107.249,180.72,105.078,181.619,102.814,181.617 L102.814,181.617z M195.648,17.058c-2.93-0.008-5.741,1.157-7.808,3.233L82.772,125.35c-4.3,4.321-4.3,11.304,0,15.625 l20.042,20.042L223.497,40.333l-20.042-20.042C201.389,18.215,198.578,17.051,195.648,17.058z"></path> </g></svg>

  <div className="card-body text-center">
    <H5 className="card-title">Mobile Friendly</H5>
    <p className="card-text">A responsive design makes your website accessible to all users, regardless of their device.</p>
  </div>
</div>
<div class="card col-md-8 col-lg-3 mx-auto py-auto my-3" style={{width: "18rem"}}>
    <svg id="ui" viewBox="0 0 511.997 511.997"><title>ui</title><polygon style={{fill:"#FFFFFF"}} points="255.999,396.073 10.084,255.572 103.365,202.604 255.999,289.809 "></polygon><polygon style={{fill:"#A4C2F7"}} points="255.999,9.658 501.913,149.308 255.999,289.809 "></polygon><polygon style={{fill:"#FFFFFF"}} points="255.999,289.383 10.084,149.733 255.999,9.232 "></polygon><polygon style={{fill:"url(#SVGID_1_)"}} points="453.611,149.308 255.999,280.148 58.386,149.308 255.999,19.318 "></polygon><polygon style={{fill:"#A4C2F7"}} points="255.999,396.073 501.913,255.572 408.633,202.604 255.999,289.809 "></polygon><polygon style={{fill:"#E3E7F2"}} points="251.594,289.809 131.679,218.186 38.399,271.154 251.594,396.073 464.122,270.488 377.179,222.186 "></polygon><polygon style={{fill:"#FFFFFF"}} points="255.999,502.598 10.084,362.097 103.365,309.129 255.999,396.333 "></polygon><polygon style={{fill:"#A4C2F7"}} points="255.999,502.598 501.913,362.097 408.633,309.129 255.999,396.333 "></polygon><polygon style={{fill:"#E3E7F2"}} points="251.594,396.333 131.679,324.721 38.399,377.689 251.594,502.598 464.122,377.013 377.179,328.711 "></polygon><g> <path style={{fill:"#428DFF"}} d="M255.999,299.469c-1.681,0-3.333-0.439-4.793-1.274L5.291,157.695 c-3.008-1.719-4.866-4.917-4.868-8.382c-0.002-3.465,1.852-6.665,4.858-8.387l125.585-72.028 c4.625-2.605,10.485-0.991,13.123,3.615c2.638,4.606,1.067,10.477-3.52,13.149L29.527,149.294l226.472,129.387l226.396-129.349 L255.866,20.691l-57.67,30.943c-4.701,2.51-10.546,0.739-13.064-3.957c-2.518-4.696-0.759-10.544,3.932-13.072l62.368-33.462 c2.927-1.564,6.451-1.521,9.34,0.113l245.915,139.651c3.017,1.715,4.883,4.917,4.887,8.388c0.004,3.471-1.854,6.677-4.868,8.399 l-245.916,140.5C259.331,299.03,257.68,299.469,255.999,299.469L255.999,299.469z"></path> <path style={{fill:"#428DFF"}} d="M255.999,405.733c-1.681,0-3.333-0.439-4.793-1.274L5.291,263.959 c-3.014-1.722-4.872-4.928-4.868-8.399c0.004-3.471,1.869-6.673,4.887-8.388L98.593,194.2c2.968-1.684,6.603-1.679,9.566,0.014 l147.84,84.467l147.849-84.467c2.963-1.693,6.599-1.698,9.566-0.014l93.274,52.972c3.018,1.715,4.883,4.917,4.887,8.388 c0.004,3.471-1.854,6.677-4.868,8.399l-245.916,140.5C259.331,405.294,257.68,405.733,255.999,405.733z M29.602,255.596 l226.397,129.349l226.396-129.349l-73.736-41.878L260.79,298.195c-2.969,1.698-6.616,1.698-9.585,0l-147.858-84.476 L29.602,255.596z"></path> <path style={{fill:"#428DFF"}} d="M255.999,511.997c-1.681,0-3.333-0.439-4.793-1.274L5.291,370.224 c-3.014-1.722-4.872-4.928-4.868-8.399c0.004-3.471,1.869-6.673,4.887-8.388l93.283-52.972c2.968-1.684,6.603-1.679,9.566,0.014 l147.84,84.467l147.849-84.467c2.963-1.693,6.599-1.698,9.566-0.014l93.274,52.972c3.018,1.715,4.883,4.917,4.887,8.388 c0.004,3.471-1.854,6.677-4.868,8.399l-245.916,140.5C259.331,511.558,257.68,511.997,255.999,511.997L255.999,511.997z M29.602,361.86l226.397,129.349L482.394,361.86l-73.736-41.878L260.79,404.459c-2.969,1.698-6.616,1.698-9.585,0l-147.858-84.476 L29.602,361.86z"></path> <circle style={{fill:"#428DFF"}} cx="164.67" cy="57.959" r="9.66"></circle> </g></svg>

  <div className="card-body text-center">
    <H5 className="card-title">Design + Development</H5>
    <p className="card-text">Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
  </div>
</div><div class="card col-md-8 col-lg-3 mx-auto py-auto my-3" style={{width: "18rem"}}>
        <svg id="commerce-and-shopping" viewBox="0 0 60 60"><title>commerce-and-shopping</title><g id="088---Online-Shopping" fill="none"><g id="Icons" transform="translate(1 1)"><path id="Shape" d="m42 58h-26c-.3125741.0091729-.611443-.1284007-.8077466-.3718172-.1963037-.2434165-.267438-.564647-.1922534-.8681828l1.5-6c.1128155-.4571833.5293028-.7737136 1-.76h23c.4706972-.0137136.8871845.3028167 1 .76l1.5 6c.0751846.3035358.0040503.6247663-.1922534.8681828-.1963036.2434165-.4951725.3809901-.8077466.3718172z" fill="#7facfa"></path><path id="Shape" d="m39 58h-23c-.3125741.0091729-.611443-.1284007-.8077466-.3718172-.1963037-.2434165-.267438-.564647-.1922534-.8681828l1.5-6c.1128155-.4571833.5293028-.7737136 1-.76h20c.4706972-.0137136.8871845.3028167 1 .76l1.5 6c.0751846.3035358.0040503.6247663-.1922534.8681828-.1963036.2434165-.4951725.3809901-.8077466.3718172z" fill="#a4c2f7"></path><path id="Shape" d="m58 37v5c0 1.6568542-1.3431458 3-3 3h-52c-1.65685425 0-3-1.3431458-3-3v-5z" fill="#7facfa"></path><path id="Shape" d="m55 37v5c0 1.6568542-1.3431458 3-3 3h-49c-1.65685425 0-3-1.3431458-3-3v-5z" fill="#a4c2f7"></path><path id="Shape" d="m21 45h16v8c0 .5522847-.4477153 1-1 1h-14c-.5522847 0-1-.4477153-1-1z" fill="#7facfa"></path><path id="Shape" d="m58 3v34h-58v-34c0-1.65685425 1.34314575-3 3-3h52c1.6568542 0 3 1.34314575 3 3z" fill="#cad9fc"></path><path id="Shape" d="m55 3v34h-55v-34c0-1.65685425 1.34314575-3 3-3h49c1.6568542 0 3 1.34314575 3 3z" fill="url(#linearGradient-1)"></path><path id="Shape" d="m21 10c-.0131804.3378252-.0634829.6731753-.15 1-.7958647 1.9452435-2.7540808 3.1565112-4.85 3-2.57 0-5-1.65-5-4z" fill="#cad9fc"></path><rect id="Rectangle-path" fill="#cad9fc" height="4" rx="1" width="22" x="32" y="17"></rect><rect id="Rectangle-path" fill="#e8edfc" height="4" rx="1" width="19" x="32" y="17"></rect><path id="Shape" d="m27.29 17.35-4 4-.29-.35v12h-14v-12l-.32.32-4-4c-.18931265-.1877666-.29579832-.4433625-.29579832-.71s.10648567-.5222334.29579832-.71l4.32-5.18c.38738408-.4652556.96466594-.72999637 1.57-.72h.43c.0215926.4118789.0989649.8189243.23 1.21.8849531 1.8039729 2.7638334 2.9029406 4.77 2.79 2.26 0 5-1.44 5-4h.43c.5948645-.00096606 1.159287.2629198 1.54.72l4.32 5.21c.1893127.1877666.2957983.4433625.2957983.71s-.1064856.5222334-.2957983.71z" fill="#e8edfc"></path><path id="Shape" d="m27.29 15.93-4.29-5.21c-.3873841-.4652556-.9646659-.72999637-1.57-.72h-.43c-.0001104.5289523-.126987 1.0501753-.37 1.52l3.66 4.41c.1893127.1877666.2957983.4433625.2957983.71s-.1064856.5222334-.2957983.71l-4 4-.29-.35v12h3v-12l.32.32 4-4c.3664107-.3956362.3531394-1.0105411-.03-1.39z" fill="#cad9fc"></path></g><path id="Shape" d="m3 42v-39c0-1.65685425 1.34314575-3 3-3h-3c-1.65685425 0-3 1.34314575-3 3v39c0 1.6568542 1.34314575 3 3 3h3c-1.65685425 0-3-1.3431458-3-3z" fill="#fff" transform="translate(1 1)"></path><path id="Rectangle-path" d="m0 9h2v8h-2z" fill="#fff"></path><g fill="#428dff"><circle id="Oval" cx="1" cy="13" r="1"></circle><path id="Shape" d="m56 0h-52c-2.209139 0-4 1.790861-4 4v5c0 .55228475.44771525 1 1 1s1-.44771525 1-1v-5c0-1.1045695.8954305-2 2-2h52c1.1045695 0 2 .8954305 2 2v33h-56v-20c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v26c0 2.209139 1.790861 4 4 4h17v3h-2.5c-.9191073.0007104-1.7194145.6277552-1.94 1.52l-1.5 6c-.1475239.5967167-.0124608 1.2281269.3662676 1.7122745.3787284.4841477.9590505.7672505 1.5737324.7677255h26c.6146819-.000475 1.195004-.2835778 1.5737324-.7677255.3787284-.4841476.5137915-1.1155578.3662676-1.7122745l-1.5-6c-.2205855-.8922448-1.0208927-1.5192896-1.94-1.52h-2.5v-3h17c2.209139 0 4-1.790861 4-4v-39c0-2.209139-1.790861-4-4-4zm-14.5 52 1.5 6h-26l1.5-6h2.5v2c0 1.1045695.8954305 2 2 2h14c1.1045695 0 2-.8954305 2-2v-2zm-18.5 2v-7h14v7zm35-11c0 1.1045695-.8954305 2-2 2h-52c-1.1045695 0-2-.8954305-2-2v-4h56z"></path><path id="Shape" d="m28 43h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"></path><path id="Shape" d="m41.58 10.19c-.4478544-.31815206-1.068498-.21545564-1.39.23l-4.7 6.58h-1.49c-1.1045695 0-2 .8954305-2 2v2c.0041513.7634356.4425638 1.4579119 1.13 1.79l1.59 8.75c.263902 1.4432776 1.5329888 2.4839288 3 2.46h12.61c1.4670112.0239288 2.736098-1.0167224 3-2.46l1.59-8.75c.6680111-.3460496 1.0853175-1.0376963 1.08-1.79v-2c0-1.1045695-.8954305-2-2-2h-1.49l-4.7-6.58c-.192624-.3252383-.5521755-.5140678-.9292782-.48803898s-.7073009.26246698-.8534132.61108598c-.1461122.3486189-.0831645.7498314.1626914 1.036953l3.87 5.42h-12.12l3.87-5.42c.3181521-.4478544.2154556-1.068498-.23-1.39zm-6.38 12.81h3.87l.29 4h-3.43zm2.47 9c-.4890037.0079763-.9120327-.3389075-1-.82l-.38-2.18h3.22l.21 3zm8.6 0h-4.54l-.22-3h5zm.36-5h-5.26l-.29-4h5.84zm4.68 4.18c-.0879673.4810925-.5109963.8279763-1 .82h-2l.21-3h3.22zm.76-4.18h-3.43l.29-4h3.87zm1.93-8v2h-20v-2z"></path><path id="Shape" d="m5 16.22c-.3786253.3755332-.59159665.8867249-.59159665 1.42s.21297135 1.0444668.59159665 1.42l4 4c.1.1 0-.7 0 11 0 .5522847.44771525 1 1 1h14c.5522847 0 1-.4477153 1-1 0-11.69-.07-10.87 0-11l4-4c.7598885-.7577138.786366-1.980093.06-2.77l-4.32-5.21c-.5710695-.6856203-1.4177033-1.08144909-2.31-1.08h-10.86c-.8922967-.00144909-1.73893053.3943797-2.31 1.08zm15.76-4.22c-1.29 2.67-6.25 2.64-7.52 0zm-9.62.09c.4419314 1.4770005 1.5199698 2.67971 2.94 3.28.0981636.070727.2109246.118565.33.14 1.6644886.6553194 3.5155114.6553194 5.18 0 .1030119-.0225055.201205-.0631371.29-.12 1.4474283-.5899516 2.5502563-1.8030624 3-3.3.28.13 0-.15 4.72 5.55l-2.6 2.59v-.73c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v13.5h-12v-13.5c0-.5522847-.4477153-1-1-1-.55228475 0-1 .4477153-1 1v.68l-2.52-2.61c4.7-5.67 4.38-5.35 4.66-5.48z"></path><path id="Shape" d="m7 4h-2c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1h2c.55228475 0 1-.44771525 1-1s-.44771525-1-1-1z"></path><path id="Shape" d="m13 6c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-2c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1z"></path><path id="Shape" d="m19 6c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-2c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1z"></path><path id="Shape" d="m55 6c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-2c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1z"></path></g></g></svg>

  <div className="card-body text-center">
    <H5 className="card-title">Ecommerce</H5>
    <p className="card-text">Integration of eCommerce platforms, payment gateways, custom product templates, and more.</p>
  </div>
</div>
        </div>
        <button className='btn btn-lg btn-outline-primary'>Learn More</button>
        </div>
        </div>
    </>);
}

export default Services;
const H1 = styled.h1`
    text-align: center;
    padding: 4rem 0;
    color: white;
    padding-bottom:0;
    font-family: Comfortaa;
    `;
    const H5 = styled.h5`
    color: #007bff;
    font-weight:bold;
    `;