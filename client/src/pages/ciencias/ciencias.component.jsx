import React from 'react';

import ReactPlayer from 'react-player';

import Menu from '../../components/menu/menu.component';



const CienciaNatureza = () => {
    return (
        <div className="row justify-content-md-center">
            <Menu />
            <div class="col-md-5">
          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595362920/quimicamd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Aula de quimica básica sobre átomos, o que são eles?</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">Química</div>
                </div>
                <small class="text-muted">3 mins</small>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
};

export default CienciaNatureza;