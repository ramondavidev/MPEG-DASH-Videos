import React from 'react';

import ReactPlayer from 'react-player';

import Menu from '../../components/menu/menu.component';

import './videopage.styles.scss';

const VideoPage = () => {
    return (
        <div>
            <Menu/>
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">

        <div class="col-md-4">
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

        <div class="col-md-4">
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

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595362319/portuguesmd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Aula de Português com nosso querido professor sobre interpretação.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">Português</div>
                </div>
                <small class="text-muted">11 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
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
        </div>

        <div class="col-md-4">
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

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <ReactPlayer
            url='https://res.cloudinary.com/dtdvexl0i/video/upload/sp_hd/v1595360416/matematicamd.mpd'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
            <div class="card-body">
              <p class="card-text">Resolvendo regra de três simples na aula de matemática.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <div type="button" class="btn btn-sm btn-outline-secondary">Matemática</div>
                </div>
                <small class="text-muted">6 mins</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="bg-dark" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">Informações</h4>
                    <p className="text-muted">Nossa sede é localizada em São Paulo, para mais informações entre em contato.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contato</h4>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Siga-nos no Facebook</a></li>
                        <li><a href="#" className="text-white">Telefone: (31)-95020328</a></li>
                        <li><a href="#" className="text-white">Email: britain@outlook.com</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
};

export default VideoPage;