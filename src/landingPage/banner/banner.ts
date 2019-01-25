import * as React from 'react';

interface IBannerProps {
    someDefaultValue: string
}

class Banner extends React.Component<{IBannerProps}> {
  constructor(props: any){
    super(props);
  }

  public render() {
    return (
        <div>This is the banner</div>
    );
  }
}

export default Banner;
