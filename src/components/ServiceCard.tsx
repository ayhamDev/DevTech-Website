import type { IServiceData, ServiceType } from '@content/Services'
import isMobile from 'is-mobile'
import React, { useEffect, useState } from 'react'

function ServiceImg({ type }: { type: ServiceType}) {
  if(type == "Consultation")
    return <svg width="135" viewBox="0 0 136 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='group-hover:fill-white' d="M35.2985 13.4091C32.8267 14.8683 30.6229 11.116 33.0947 9.65675C64.8109 -9.10496 105.7 2.569 123.002 34.6724C123.568 35.7445 123.181 37.0548 122.138 37.6206C121.066 38.1865 119.756 37.7993 119.19 36.757C102.9 6.52981 64.662 -3.95293 35.2985 13.4091ZM99.3861 115.824C100.399 115.169 101.739 115.437 102.394 116.45C103.049 117.462 102.781 118.802 101.798 119.457C79.7607 134.05 51.0523 133.841 29.2828 118.832C18.532 111.446 10.1339 100.874 5.42861 88.5155C5.01169 87.3839 5.57752 86.1331 6.6794 85.7161C7.81105 85.2694 9.06183 85.865 9.50854 86.9669C23.3267 123.329 67.3423 137.147 99.3861 115.824ZM76.0084 68.503C76.0084 71.3619 71.6604 71.3619 71.6604 68.503C71.6604 58.8541 83.394 53.9701 90.2435 60.8196C92.209 62.7852 93.43 65.525 93.43 68.503C93.43 79.0155 83.9598 76.5437 83.5429 83.2444C83.3642 86.1033 79.0162 85.8353 79.1949 82.9763C79.8203 73.2381 89.082 75.9779 89.082 68.5328C89.082 62.7554 82.0241 59.8071 77.9441 63.9168C76.7529 65.0485 76.0084 66.6864 76.0084 68.503ZM99.9519 68.503C99.9519 71.3619 95.604 71.3619 95.604 68.503C95.604 58.8541 107.337 53.9701 114.187 60.8196C116.153 62.7852 117.374 65.525 117.374 68.503C117.374 79.0155 107.903 76.5437 107.486 83.2444C107.308 86.1033 102.96 85.8353 103.138 82.9763C103.764 73.2381 113.026 75.9779 113.026 68.5328C113.026 62.7554 105.968 59.8071 101.888 63.9168C100.696 65.0485 99.9519 66.6864 99.9519 68.503ZM103.109 88.6644C103.109 85.7757 107.457 85.7757 107.457 88.6644V90.0343C107.457 92.8932 103.109 92.8932 103.109 90.0343V88.6644ZM79.1651 88.6644C79.1651 85.7757 83.5131 85.7757 83.5131 88.6644V90.0343C83.5131 92.8932 79.1651 92.8932 79.1651 90.0343V88.6644ZM62.9943 43.5767H77.1698V27.4953C77.1698 24.815 74.9661 22.5815 72.2561 22.5815H9.38942C6.70918 22.5815 4.47564 24.7852 4.47564 27.4953V70.3494C4.47564 73.0297 6.6794 75.2632 9.38942 75.2632H19.217C20.438 75.2632 21.391 76.2459 21.391 77.4372V88.4857L33.9881 75.8886C34.4348 75.4717 34.9709 75.2632 35.5367 75.2632H53.7326V52.8683C53.7326 47.746 57.8721 43.5767 62.9943 43.5767ZM81.5476 43.5767H125.891C130.983 43.5767 135.152 47.746 135.152 52.8385V95.6926C135.152 100.785 130.983 104.954 125.891 104.954H118.237V119.07C118.237 121.006 115.884 121.989 114.515 120.589L98.85 104.925H62.9943C57.9019 104.925 53.7326 100.755 53.7326 95.6628V79.5516H36.4301L20.7656 95.2459C19.3957 96.6456 17.043 95.6628 17.043 93.7271V79.5814H9.38942C4.29696 79.5814 0.127686 75.4121 0.127686 70.3196V27.4953C0.127686 22.4028 4.29696 18.2335 9.38942 18.2335H72.2858C77.3783 18.2335 81.5476 22.4028 81.5476 27.4953V43.5767ZM125.891 47.9247H62.9943C60.3141 47.9247 58.0805 50.1285 58.0805 52.8385V95.6926C58.0805 98.3729 60.2843 100.606 62.9943 100.606H99.7435C100.309 100.606 100.875 100.815 101.292 101.232L113.889 113.829V102.78C113.889 101.589 114.872 100.606 116.063 100.606H125.891C128.571 100.606 130.805 98.4026 130.805 95.6926V52.8385C130.805 50.1285 128.571 47.9247 125.891 47.9247ZM58.7655 32.9451C61.6542 32.9451 61.6542 37.2931 58.7655 37.2931H33.2138C30.3549 37.2931 30.3549 32.9451 33.2138 32.9451H58.7655ZM45.3047 59.3008C48.1636 59.3008 48.1636 63.6488 45.3047 63.6488H13.9161C11.0571 63.6488 11.0571 59.3008 13.9161 59.3008H45.3047ZM45.3047 46.1379C48.1636 46.1379 48.1636 50.4858 45.3047 50.4858H13.9161C11.0571 50.4858 11.0571 46.1379 13.9161 46.1379H45.3047Z" fill="currentColor"/>
    </svg>
    
  if(type == "Marketing")
    return <svg width="135" viewBox="0 0 135 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M124.189 100.544C120.542 100.544 117.305 102.352 115.359 105.148C113.414 102.352 110.177 100.544 106.53 100.544C100.755 100.544 96.0281 105.224 95.7849 111.212C95.3594 121.607 108.186 131.911 114.463 135.27C114.752 135.422 115.056 135.498 115.359 135.498C115.663 135.498 115.983 135.422 116.256 135.27C122.533 131.911 135.36 121.607 134.934 111.212C134.676 105.224 129.964 100.544 124.189 100.544ZM115.344 131.395C108.277 127.291 99.2956 118.477 99.5844 111.364C99.7515 107.443 102.791 104.358 106.514 104.358C110.207 104.358 113.247 107.246 113.445 110.924C113.49 111.942 114.341 112.732 115.359 112.732C116.378 112.732 117.214 111.942 117.274 110.924C117.457 107.246 120.511 104.358 124.204 104.358C127.928 104.358 130.967 107.428 131.135 111.364C131.408 118.462 122.426 127.291 115.344 131.395ZM77.8214 84.1301C78.9764 82.124 79.2803 79.7988 78.6876 77.5648C78.0949 75.3307 76.6512 73.4614 74.6451 72.3064C72.639 71.1514 70.3138 70.8474 68.0797 71.4401C68.0645 71.4401 68.0645 71.4401 68.0493 71.4553L62.7149 51.5161C61.8183 48.1878 58.3836 46.1969 55.0554 47.0936C51.7271 47.9902 49.7362 51.4249 50.6328 54.7532L50.9368 55.9082C44.3714 66.8353 28.6115 74.738 15.8303 78.5222L7.19807 80.8475C2.12207 82.2152 -0.902258 87.4432 0.45033 92.5344L3.44426 103.735C4.58408 107.99 8.44427 110.802 12.654 110.802C13.0036 110.802 13.3683 110.772 13.7178 110.726L25.9823 131.972C27.2893 134.237 29.6601 135.498 32.107 135.498C33.3076 135.498 34.5082 135.194 35.6176 134.556C37.2437 133.614 38.414 132.094 38.9003 130.27C39.3866 128.446 39.1435 126.547 38.2012 124.921L32.4413 114.936L34.0522 114.009C36.7726 112.443 37.6997 108.963 36.1343 106.243L36.0583 106.106C46.4687 105.072 57.563 105.832 65.4505 110.209L65.5265 110.483C65.952 112.094 67.0007 113.446 68.4444 114.282C69.4171 114.845 70.4809 115.133 71.5751 115.133C72.1223 115.133 72.6542 115.057 73.2013 114.92C74.8122 114.495 76.1648 113.446 77.0007 112.003C77.8366 110.559 78.0645 108.872 77.6238 107.261L72.5174 88.2183C72.5326 88.2183 72.5326 88.2183 72.5478 88.2183C74.797 87.5648 76.6664 86.1362 77.8214 84.1301ZM7.13728 102.732L4.14335 91.5314C3.32268 88.4918 5.14639 85.3459 8.18591 84.5253L16.8486 82.2C16.8637 82.2 16.8789 82.1848 16.8941 82.1848C17.8972 81.8809 18.9154 81.5617 19.9185 81.2274L25.9519 103.75C24.9185 103.963 23.8699 104.191 22.8516 104.434C22.8364 104.434 22.8212 104.449 22.806 104.449L14.1434 106.775C11.1039 107.595 7.95795 105.772 7.13728 102.732ZM35.2377 129.267C35.0097 130.103 34.4778 130.802 33.7331 131.228C32.1829 132.124 30.2073 131.592 29.3106 130.042L17.6236 109.799L23.7787 108.158C23.885 108.127 24.0066 108.112 24.113 108.082L34.9337 126.82C35.344 127.55 35.4504 128.431 35.2377 129.267ZM32.8516 108.127C33.3684 109.024 33.0644 110.164 32.1677 110.68L30.5568 111.607L28.034 107.246C29.3106 107.003 30.6176 106.775 31.955 106.592L32.8516 108.127ZM45.648 101.866C40.6176 101.775 35.1465 102.2 29.7209 103.082L23.5203 79.9508C28.6571 78.0055 33.6115 75.6347 37.9276 73.0359C44.0979 69.3125 48.8851 65.1939 52.2438 60.7866L64.1739 105.316C59.0523 103.173 52.8669 102.003 45.648 101.866ZM73.7028 110.057C73.3685 110.62 72.8518 111.03 72.2287 111.197C71.6056 111.364 70.9521 111.273 70.3745 110.954C69.8122 110.62 69.4019 110.103 69.2347 109.48L54.3107 53.7653C53.9611 52.4735 54.7362 51.1209 56.028 50.7866C56.2408 50.7258 56.4535 50.7106 56.6511 50.7106C57.7301 50.7106 58.718 51.4249 59.0067 52.5191L73.9308 108.218C74.1131 108.826 74.022 109.48 73.7028 110.057ZM69.0372 75.1331C69.0524 75.1331 69.0523 75.1331 69.0675 75.118C70.3137 74.7836 71.6207 74.9508 72.7454 75.6043C73.87 76.2578 74.6603 77.2912 74.9946 78.5374C75.329 79.7836 75.1618 81.0906 74.5083 82.2152C73.8548 83.3399 72.8214 84.1301 71.5751 84.4645C71.56 84.4645 71.56 84.4645 71.5448 84.4645L69.0372 75.1331ZM91.1497 92.2153C90.7849 92.7928 90.1618 93.1271 89.5235 93.1271C89.174 93.1271 88.8396 93.0359 88.5205 92.8384L81.3472 88.4007C80.4506 87.8536 80.177 86.6681 80.7241 85.7715C81.2712 84.8748 82.4566 84.6013 83.3533 85.1484L90.5266 89.5861C91.4232 90.1484 91.6968 91.3186 91.1497 92.2153ZM83.6421 61.0146L79.2044 68.1878C78.8396 68.7654 78.2165 69.0997 77.5782 69.0997C77.2287 69.0997 76.8943 69.0085 76.5752 68.8109C75.6785 68.2638 75.405 67.0784 75.9521 66.1818L80.3898 59.0085C80.9369 58.1118 82.1223 57.8383 83.019 58.3854C83.9156 58.9325 84.1892 60.1179 83.6421 61.0146ZM94.098 73.6286C94.3412 74.662 93.7029 75.6803 92.6846 75.9234L84.4779 77.8687C84.326 77.8991 84.1892 77.9143 84.0372 77.9143C83.1709 77.9143 82.3807 77.3216 82.1831 76.4401C81.9399 75.4067 82.5782 74.3885 83.5965 74.1453L91.8032 72.2C92.8214 71.9569 93.8549 72.5951 94.098 73.6286ZM7.50202 43.2182H47.0766C51.1344 43.2182 54.4474 39.9203 54.4474 35.8473V8.0357C54.4474 3.97793 51.1496 0.664856 47.0766 0.664856H7.50202C3.44426 0.664856 0.13118 3.96274 0.13118 8.0357V35.8473C0.13118 39.9203 3.42906 43.2182 7.50202 43.2182ZM3.94578 8.0357C3.94578 6.07521 5.54153 4.49465 7.48682 4.49465H47.0614C49.0219 4.49465 50.6025 6.0904 50.6025 8.0357V35.8473C50.6025 37.8078 49.0067 39.3884 47.0614 39.3884H7.50202C5.54153 39.3884 3.96098 37.7926 3.96098 35.8473V8.0357H3.94578ZM20.6024 32.7318C21.423 33.2029 22.3045 33.4309 23.2012 33.4309C24.0978 33.4309 24.9945 33.2029 25.7999 32.7318L36.6814 26.4552C38.3076 25.513 39.2802 23.826 39.2802 21.9415C39.2802 20.057 38.3076 18.3701 36.6814 17.4278L25.7999 11.1512C24.1738 10.209 22.2285 10.209 20.5872 11.1512C18.961 12.0935 17.9884 13.7804 17.9884 15.6649V28.2181C18.0036 30.1026 18.9762 31.7896 20.6024 32.7318ZM21.8182 15.6649C21.8182 15.133 22.0461 14.7378 22.5173 14.4643C22.7452 14.3275 22.9732 14.2667 23.2164 14.2667C23.4443 14.2667 23.6723 14.3275 23.9154 14.4643L34.7969 20.7409C35.2529 20.9993 35.496 21.4096 35.496 21.9415C35.496 22.4734 35.2681 22.8686 34.7969 23.1421L23.9154 29.4187C23.4595 29.6771 22.9884 29.6771 22.5325 29.4187C22.0765 29.1604 21.8334 28.75 21.8334 28.2181V15.6649H21.8182ZM127.563 0.680054H88.0038C83.946 0.680054 80.6329 3.97794 80.6329 8.0509V35.8625C80.6329 39.9203 83.9308 43.2334 88.0038 43.2334H91.6968V51.6224C91.6968 53.2334 92.6846 54.6468 94.2044 55.2091C94.6451 55.3763 95.1011 55.4522 95.5418 55.4522C96.636 55.4522 97.6847 54.9811 98.4293 54.0997L107.685 43.2334H127.594C131.651 43.2334 134.964 39.9355 134.964 35.8625V8.0509C134.934 3.97794 131.636 0.680054 127.563 0.680054ZM131.119 35.8625C131.119 37.823 129.524 39.4036 127.578 39.4036H106.788C106.226 39.4036 105.694 39.6467 105.329 40.0723L95.5114 51.6072V41.3185C95.5114 40.2698 94.6603 39.4036 93.5965 39.4036H88.0038C86.0433 39.4036 84.4627 37.8078 84.4627 35.8625V8.0509C84.4627 6.0904 86.0585 4.50985 88.0038 4.50985H127.563C129.524 4.50985 131.104 6.1056 131.104 8.0509V35.8625H131.119ZM126.621 21.9567C126.621 23.0053 125.77 23.8716 124.706 23.8716H90.8609C89.8123 23.8716 88.946 23.0205 88.946 21.9567C88.946 20.9081 89.7971 20.0418 90.8609 20.0418H124.706C125.755 20.0418 126.621 20.8929 126.621 21.9567ZM109.691 31.6376C109.691 32.6862 108.84 33.5525 107.776 33.5525H90.8609C89.8123 33.5525 88.946 32.7014 88.946 31.6376C88.946 30.589 89.7971 29.7227 90.8609 29.7227H107.776C108.84 29.7227 109.691 30.5738 109.691 31.6376ZM126.621 12.2606C126.621 13.3093 125.77 14.1755 124.706 14.1755H90.8609C89.8123 14.1755 88.946 13.3245 88.946 12.2606C88.946 11.1968 89.7971 10.3457 90.8609 10.3457H124.706C125.755 10.3609 126.621 11.212 126.621 12.2606Z" fill="currentColor"/>
    </svg>
    
  if(type == "Design")
    return <svg width="126" height="136" viewBox="0 0 126 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M117.449 128.483C116.76 128.483 116.085 128.279 115.511 127.896C114.938 127.513 114.49 126.968 114.226 126.331C113.962 125.693 113.893 124.992 114.027 124.315C114.162 123.639 114.494 123.017 114.982 122.529C115.47 122.041 116.091 121.709 116.768 121.575C117.445 121.44 118.146 121.509 118.783 121.774C119.421 122.038 119.965 122.485 120.348 123.059C120.731 123.632 120.936 124.307 120.936 124.997C120.935 125.921 120.567 126.807 119.914 127.461C119.26 128.114 118.374 128.482 117.449 128.483ZM68.992 131.112H56.7595V118.882H68.992V131.112ZM8.30354 128.483C7.61358 128.483 6.93895 128.279 6.365 127.896C5.79106 127.514 5.34358 126.969 5.07921 126.332C4.81483 125.694 4.74542 124.993 4.87977 124.316C5.01412 123.639 5.34619 123.018 5.83396 122.53C6.32173 122.042 6.94329 121.709 7.61998 121.575C8.29668 121.44 8.99811 121.509 9.63552 121.773C10.2729 122.037 10.8177 122.485 11.2008 123.059C11.584 123.632 11.7884 124.307 11.7881 124.997C11.7873 125.921 11.42 126.807 10.7667 127.46C10.1134 128.114 9.2276 128.482 8.30354 128.483ZM19.1581 75.5399H26.1901V82.5718H19.1581V75.5399ZM99.6722 75.5399H106.704V82.5718H99.6722V75.5399ZM117.449 117.301C115.776 117.303 114.148 117.85 112.812 118.859C111.476 119.867 110.504 121.283 110.042 122.892H81.2979C88.166 119.581 94.0144 114.48 98.2272 108.126C102.44 101.771 104.861 94.3985 105.236 86.7835H108.809C109.086 86.7837 109.36 86.7294 109.615 86.6237C109.871 86.518 110.103 86.363 110.299 86.1676C110.495 85.9721 110.65 85.74 110.756 85.4845C110.862 85.229 110.917 84.9551 110.917 84.6784V73.4363C110.917 73.1597 110.862 72.8859 110.756 72.6305C110.65 72.3751 110.495 72.1431 110.299 71.9477C110.103 71.7523 109.871 71.5975 109.615 71.492C109.36 71.3864 109.086 71.3323 108.809 71.3327H97.5746C97.298 71.3323 97.0241 71.3864 96.7684 71.492C96.5128 71.5975 96.2804 71.7523 96.0846 71.9477C95.8889 72.1431 95.7335 72.3751 95.6274 72.6305C95.5214 72.8859 95.4667 73.1597 95.4665 73.4363V84.6784C95.4667 84.9551 95.5214 85.229 95.6274 85.4845C95.7335 85.74 95.8888 85.9721 96.0845 86.1676C96.2803 86.363 96.5126 86.518 96.7683 86.6237C97.024 86.7294 97.2979 86.7837 97.5746 86.7835H101.028C100.571 94.7421 97.6448 102.36 92.6574 108.579C87.6699 114.798 80.8686 119.308 73.1992 121.482V116.778C73.199 116.502 73.1443 116.228 73.0382 115.972C72.932 115.716 72.7765 115.484 72.5806 115.289C72.3847 115.093 72.1522 114.938 71.8964 114.833C71.6405 114.727 71.3664 114.673 71.0896 114.673H54.6469C54.0904 114.676 53.5577 114.899 53.1652 115.294C52.7726 115.688 52.5523 116.222 52.5523 116.778V121.482C44.8831 119.308 38.0821 114.797 33.0947 108.579C28.1073 102.36 25.1814 94.7419 24.7238 86.7835H28.2966C28.8533 86.7811 29.3862 86.5582 29.7788 86.1637C30.1714 85.7691 30.3917 85.235 30.3913 84.6784V73.4363C30.3924 73.1605 30.3391 72.8872 30.2344 72.632C30.1297 72.3768 29.9756 72.1448 29.7809 71.9494C29.5863 71.7539 29.355 71.5989 29.1003 71.493C28.8456 71.3872 28.5725 71.3327 28.2966 71.3327H17.0486C16.7727 71.3327 16.4996 71.3872 16.2449 71.493C15.9902 71.5989 15.7589 71.7539 15.5643 71.9494C15.3696 72.1448 15.2155 72.3768 15.1108 72.632C15.0061 72.8872 14.9528 73.1605 14.9539 73.4363V84.6784C14.9526 84.9544 15.0057 85.2279 15.1104 85.4832C15.215 85.7385 15.3691 85.9707 15.5637 86.1663C15.7584 86.3619 15.9897 86.5172 16.2446 86.6231C16.4994 86.729 16.7726 86.7835 17.0486 86.7835H20.5107C20.8859 94.3984 23.3074 101.771 27.5202 108.126C31.733 114.48 37.5813 119.581 44.4491 122.892H15.7095C15.2017 121.105 14.0651 119.563 12.5094 118.549C10.9536 117.535 9.08358 117.117 7.24423 117.373C5.40488 117.63 3.72026 118.543 2.50106 119.944C1.28187 121.344 0.610352 123.139 0.610352 124.996C0.610352 126.853 1.28187 128.648 2.50106 130.049C3.72026 131.449 5.40488 132.362 7.24423 132.619C9.08358 132.875 10.9536 132.458 12.5094 131.443C14.0651 130.429 15.2017 128.887 15.7095 127.1H52.5523V133.215C52.5523 133.772 52.7727 134.305 53.1652 134.699C53.5578 135.094 54.0906 135.316 54.6469 135.319H71.0881C71.3648 135.319 71.6389 135.265 71.8948 135.16C72.1506 135.055 72.3831 134.9 72.579 134.704C72.775 134.509 72.9305 134.277 73.0366 134.021C73.1428 133.766 73.1975 133.492 73.1977 133.215V127.1H110.042C110.433 128.477 111.201 129.718 112.258 130.682C113.316 131.647 114.621 132.298 116.028 132.561C117.435 132.825 118.887 132.691 120.222 132.174C121.557 131.658 122.722 130.779 123.585 129.638C124.448 128.496 124.975 127.136 125.108 125.711C125.241 124.285 124.974 122.851 124.336 121.57C123.699 120.288 122.717 119.21 121.5 118.455C120.284 117.701 118.881 117.301 117.449 117.301ZM47.0958 34.2835H78.6437L93.0981 61.708L64.9853 101.889V73.8642C67.0393 73.3496 68.8343 72.1018 70.0322 70.3557C71.2301 68.6096 71.7482 66.4858 71.4889 64.3843C71.2297 62.2827 70.211 60.3485 68.6247 58.9458C67.0384 57.5432 64.994 56.769 62.8765 56.769C60.759 56.769 58.7146 57.5432 57.1283 58.9458C55.542 60.3485 54.5233 62.2827 54.2641 64.3843C54.0049 66.4858 54.523 68.6096 55.7208 70.3557C56.9187 72.1018 58.7137 73.3496 60.7677 73.8642V101.889L32.643 61.708L47.0958 34.285V34.2835ZM43.0143 23.2957H82.7372V25.0911L78.8921 30.0733H46.8669L43.0203 25.0911V23.2957H43.0143ZM38.8086 4.87356H86.9429V19.087H38.8086V4.87356ZM62.8758 69.9174C63.7576 69.9162 64.6192 69.6536 65.3518 69.1629C66.0845 68.6722 66.6552 67.9753 66.9919 67.1603C67.3286 66.3453 67.4161 65.4488 67.2435 64.5841C67.0708 63.7194 66.6457 62.9252 66.0219 62.302C65.3981 61.6788 64.6035 61.2545 63.7386 61.0827C62.8737 60.911 61.9773 60.9994 61.1627 61.3369C60.348 61.6745 59.6517 62.2459 59.1617 62.979C58.6717 63.7121 58.41 64.574 58.4097 65.4558C58.4129 66.6389 58.8846 67.7726 59.7216 68.6087C60.5586 69.4448 61.6927 69.9154 62.8758 69.9174ZM28.4642 63.0665C28.2453 62.7488 28.117 62.3775 28.093 61.9924C28.069 61.6073 28.1503 61.223 28.3281 60.8806L43.3375 32.3953L39.2365 27.1019C38.9487 26.7334 38.7909 26.2799 38.7877 25.8122V23.2957H36.7125C36.4354 23.2969 36.1609 23.2434 35.9045 23.1382C35.6482 23.033 35.4151 22.8783 35.2187 22.6828C35.0223 22.4874 34.8664 22.2551 34.76 21.9993C34.6535 21.7435 34.5986 21.4692 34.5985 21.1921V2.76847C34.5986 2.49139 34.6535 2.21708 34.76 1.96127C34.8664 1.70545 35.0223 1.47317 35.2187 1.27773C35.4151 1.0823 35.6482 0.927557 35.9045 0.822389C36.1609 0.717222 36.4354 0.663693 36.7125 0.664875H89.039C89.3161 0.663693 89.5907 0.717222 89.847 0.822389C90.1033 0.927557 90.3364 1.0823 90.5328 1.27773C90.7292 1.47317 90.8851 1.70545 90.9915 1.96127C91.098 2.21708 91.1529 2.49139 91.1531 2.76847V21.1921C91.1529 21.4688 91.0981 21.7427 90.992 21.9983C90.8858 22.2538 90.7303 22.4859 90.5344 22.6813C90.3385 22.8766 90.1059 23.0315 89.8501 23.1369C89.5943 23.2423 89.3202 23.2963 89.0435 23.2957H86.9638V25.8122C86.9612 26.28 86.8033 26.7336 86.515 27.1019L82.4155 32.3953L97.4265 60.8806C97.6035 61.2233 97.6843 61.6076 97.66 61.9926C97.6358 62.3775 97.5075 62.7487 97.2888 63.0665L64.6008 109.772C64.4063 110.049 64.148 110.275 63.8478 110.431C63.5475 110.587 63.2141 110.668 62.8758 110.668C62.5374 110.668 62.204 110.587 61.9037 110.431C61.6035 110.275 61.3452 110.049 61.1507 109.772L28.4642 63.0665Z" fill="currentColor"/>
    </svg>
    
  if(type == "Development")
    return <svg width="135" height="136" viewBox="0 0 135 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M123.916 0.664978H11.094C8.18552 0.664978 5.39621 1.82035 3.33963 3.87692C1.28306 5.9335 0.127686 8.72281 0.127686 11.6312V91.9267C0.127686 94.8351 1.28306 97.6244 3.33963 99.681C5.39621 101.738 8.18552 102.893 11.094 102.893H55.8884V121.48H44.2716C42.423 121.48 40.6501 122.214 39.343 123.521C38.0358 124.828 37.3015 126.601 37.3015 128.45C37.3015 130.299 38.0358 132.071 39.343 133.379C40.6501 134.686 42.423 135.42 44.2716 135.42H90.7388C92.5874 135.42 94.3603 134.686 95.6674 133.379C96.9746 132.071 97.7089 130.299 97.7089 128.45C97.7089 126.601 96.9746 124.828 95.6674 123.521C94.3603 122.214 92.5874 121.48 90.7388 121.48H79.122V102.893H123.916C126.825 102.893 129.614 101.738 131.671 99.681C133.727 97.6244 134.883 94.8351 134.883 91.9267V11.6312C134.883 8.72281 133.727 5.9335 131.671 3.87692C129.614 1.82035 126.825 0.664978 123.916 0.664978ZM11.094 5.3117H123.916C125.592 5.3117 127.2 5.97751 128.385 7.16266C129.57 8.3478 130.236 9.9552 130.236 11.6312V79.6593H4.77441V11.6312C4.77441 9.9552 5.44022 8.3478 6.62536 7.16266C7.81051 5.97751 9.41791 5.3117 11.094 5.3117ZM90.7388 126.127C91.355 126.127 91.946 126.371 92.3817 126.807C92.8174 127.243 93.0622 127.834 93.0622 128.45C93.0622 129.066 92.8174 129.657 92.3817 130.093C91.946 130.529 91.355 130.773 90.7388 130.773H44.2716C43.6554 130.773 43.0644 130.529 42.6287 130.093C42.193 129.657 41.9482 129.066 41.9482 128.45C41.9482 127.834 42.193 127.243 42.6287 126.807C43.0644 126.371 43.6554 126.127 44.2716 126.127H90.7388ZM74.4753 121.48H60.5351V102.893H74.4753V121.48ZM123.916 98.2462H11.094C9.41791 98.2462 7.81051 97.5804 6.62536 96.3953C5.44022 95.2101 4.77441 93.6027 4.77441 91.9267V84.306H130.236V91.9267C130.236 93.6027 129.57 95.2101 128.385 96.3953C127.2 97.5804 125.592 98.2462 123.916 98.2462Z" fill="currentColor"/>
    <path d="M67.5052 94.5753C69.3273 94.5753 70.8043 93.0982 70.8043 91.2761C70.8043 89.454 69.3273 87.977 67.5052 87.977C65.6831 87.977 64.206 89.454 64.206 91.2761C64.206 93.0982 65.6831 94.5753 67.5052 94.5753Z" fill="currentColor"/>
    <path d="M45.5261 60.3754C45.9693 60.8201 46.5709 61.0708 47.1989 61.0724C47.6536 61.066 48.0965 60.9263 48.4726 60.6706C48.8487 60.4149 49.1414 60.0544 49.3146 59.6339C49.4878 59.2133 49.5337 58.7512 49.4467 58.3048C49.3597 57.8584 49.1436 57.4474 48.8252 57.1227L34.188 42.4855L48.9182 27.8483C49.3439 27.414 49.5823 26.8301 49.5823 26.2219C49.5823 25.6138 49.3439 25.0299 48.9182 24.5956C48.7022 24.3778 48.4452 24.205 48.1621 24.087C47.879 23.9691 47.5753 23.9083 47.2686 23.9083C46.9619 23.9083 46.6582 23.9691 46.3751 24.087C46.0919 24.205 45.835 24.3778 45.619 24.5956L29.3555 40.8591C28.9297 41.2934 28.6913 41.8773 28.6913 42.4855C28.6913 43.0936 28.9297 43.6775 29.3555 44.1118L45.5261 60.3754Z" fill="currentColor"/>
    <path d="M86.0921 60.3754C86.5354 60.8201 87.137 61.0708 87.7649 61.0724C88.3778 61.0636 88.9623 60.8131 89.3913 60.3754L105.655 44.1118C106.081 43.6775 106.319 43.0936 106.319 42.4855C106.319 41.8773 106.081 41.2934 105.655 40.8591L89.3913 24.5956C89.1753 24.3778 88.9183 24.205 88.6352 24.087C88.3521 23.9691 88.0484 23.9083 87.7417 23.9083C87.435 23.9083 87.1313 23.9691 86.8482 24.087C86.5651 24.205 86.3081 24.3778 86.0921 24.5956C85.6664 25.0299 85.428 25.6138 85.428 26.2219C85.428 26.8301 85.6664 27.414 86.0921 27.8483L100.729 42.4855L86.0921 57.1227C85.6664 57.557 85.428 58.1409 85.428 58.749C85.428 59.3572 85.6664 59.9411 86.0921 60.3754Z" fill="currentColor"/>
    <path d="M58.2117 60.8401C58.5323 60.9886 58.8806 61.0678 59.234 61.0724C59.6694 61.0733 60.0963 60.9518 60.466 60.7217C60.8358 60.4917 61.1334 60.1624 61.325 59.7713L77.5885 27.2443C77.7228 26.9697 77.8016 26.6713 77.8206 26.3662C77.8395 26.0612 77.7982 25.7554 77.6989 25.4663C77.5997 25.1772 77.4445 24.9105 77.2422 24.6813C77.0398 24.4522 76.7944 24.2652 76.5198 24.131C76.2452 23.9967 75.9468 23.9179 75.6418 23.8989C75.3367 23.88 75.0309 23.9213 74.7418 24.0205C74.4527 24.1198 74.186 24.275 73.9569 24.4773C73.7277 24.6796 73.5407 24.9251 73.4065 25.1997L57.1429 57.7268C56.8831 58.2831 56.8492 58.9185 57.0486 59.4993C57.2479 60.08 57.6649 60.5607 58.2117 60.8401Z" fill="currentColor"/>
    </svg>
    
}

function ServiceCard(props: IServiceData) {
  const [Selected,SetSelected] = useState<boolean>(false)
  useEffect(() => {
    function handleHashChange() {
      // @ts-ignore
      const ServiceType: ServiceType | undefined = location.hash.split("/")[1]

            
      if(props.type == ServiceType) {
        SetSelected(true)
      }   
      else if(ServiceType == undefined && props.type == "Consultation" ? true : false) {
        SetSelected(true)
      }  
      else {
        SetSelected(false)
      }  
    }
      window.addEventListener("hashchange",handleHashChange)
      handleHashChange()
    return () => {
      window.removeEventListener("hashchange",handleHashChange)
    }
  
  },[])
  
  return (
    <div  className={`text-primary cursor-pointer ${Selected && "bg-primary text-white"} select-none shadow-xl sm:shadow-main w-[240px] h-[275px] flex justify-between py-8 items-center flex-col m-auto rounded-main hover:translate-y-5 sm:active:scale-105 sm:active:translate-y-[-5px] sm:hover:scale-95 hover:bg-primary hover:text-white transition-all duration-300`}  onClick={() => location.hash = `#/${props.type}` } >

      
      <ServiceImg type={props.type} />
      <h4>{props.type}</h4>
    </div>

  )
}

export default ServiceCard