import React from 'react';

import ReactPlayer from 'react-player';

import Menu from '../../components/menu/menu.component';



const CienciasHumanas = () => {
    return (
        <div className="row justify-content-md-center">
            <Menu />
            <div class="col-md-5">
          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595362152/historiamd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Aula de historia, fique por dentro de tudo sobre guerra fria.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">História</div>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595361921/geografiamd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Aula de geografia sobre globalização, saiba seus principais aspectos.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">Geografia</div>
                </div>
                <small class="text-muted">5 mins</small>
              </div>
            </div>
          </div>

        </div>
    </div>
    )
};

export default CienciasHumanas;