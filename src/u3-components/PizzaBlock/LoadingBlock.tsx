import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingBlock: React.FC = (props) => {

   return (
       <ContentLoader
           className="pizza-block"
           speed={2}
           width={260}
           height={460}
           viewBox="0 0 280 460"
           backgroundColor="#f3f3f3"
           foregroundColor="#ecebeb"
       >
          <circle cx="128" cy="132" r="115"/>
          <rect x="79" y="339" rx="0" ry="0" width="6" height="0"/>
          <rect x="0" y="305" rx="6" ry="6" width="280" height="95"/>
          <rect x="0" y="418" rx="6" ry="6" width="84" height="32"/>
          <rect x="0" y="260" rx="4" ry="4" width="280" height="25"/>
          <rect x="139" y="409" rx="25" ry="25" width="120" height="47"/>
       </ContentLoader>
   )
}