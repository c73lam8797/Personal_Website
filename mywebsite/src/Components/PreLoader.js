import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../CSS/_preloader.css';
import { withStyles } from '@material-ui/core/styles';

const StyledProgress = withStyles({
  bar: { 
    backgroundColor: '#f7ba8e'
  }
})(LinearProgress);


export function PreLoader({id, isLoading, setIsLoading}) {
  const [progress, setProgress] = useState(1);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress > 100) {
          return setIsLoading(false);
        }
        return oldProgress*1.05;
      });
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, []);

	return (
		<Container id={id} fluid>
			<StyledProgress id="progress" variant="determinate" color="primary" value={progress} />
		</Container>
	)
}