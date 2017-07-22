import React  from 'react';

const Loading = () => {
    return (
      <div>
            <div className="app-authenticating-box hidden">
                <div className="BebasNeue font-2-00 white opacity-50">
                    <div>
                        <img src="/app/images/Mega-Runbook-Creator-Button-01.png" alt="mega-runbook-creator" />
                    </div>
                    <div className="app-authenticating bounceInLeft animated">authenticating</div>
                    <img src="/app/images/running.gif" className="opacity-50"/>
                    <img src="/app/images/spiro.svg" className="spriro-02" />
                </div>
            </div>
      </div>
  );
};

export default Loading;
