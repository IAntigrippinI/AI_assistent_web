import React from 'react';
import { Timeline, ConfigProvider } from 'antd';
function Tasks(){
    return(  
    <div className='text-white'>
<ConfigProvider
  theme={{
    components: {
      Timeline: {
        tailColor: 'rgb(255, 255, 255)',
        tailWidth: 10,
      },
    },
  }}
>

</ConfigProvider>
        <Timeline
            items={[
            {
                className:'text-white',
                children: 'Create a services site 2015-09-01',
            },
            {
                className:'text-white',
                children: 'Solve initial network problems 2015-09-01',
            },
            {
                className:'text-white',
                children: 'Technical testing 2015-09-01',
            },
            {
                className:'text-white',
                children: 'Network problems being solved 2015-09-01',
            },
            ]}
        />
        </div>)
}
export default Tasks;