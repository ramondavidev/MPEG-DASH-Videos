import React from 'react';

import ReactPlayer from 'react-player';

import Menu from '../../components/menu/menu.component';



const Redacao = () => {
    return (
        <div className="row justify-content-md-center">
            <Menu />
            <div class="col-md-5">
          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595363032/redacaomd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Aula introdutória de redação com o professor de redação.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">Redação</div>
                </div>
                <small class="text-muted">16 mins</small>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
};

export default Redacao;