export default function Home() {

    return <div className="container-fluid" id="main-container">


        <div className="row h-100">
            <div className="col-12 col-sm-5 col-md-4 d-flex flex-column" id="chat-list-area" style={{ position: 'relative' }}>
                <div className="row d-flex flex-row align-items-center p-2" id="navbar">
                    <img alt="Profile Photo" className="img-fluid rounded-circle mr-2" style={{ height: '50px', cursor: 'pointer' }} onClick={{}} id="display-pic" />
                    <div className="text-white font-weight-bold" id="username"></div>
                    <div className="nav-item dropdown ml-auto">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v text-white"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">New Group</a>
                            <a className="dropdown-item" href="#">Archived</a>
                            <a className="dropdown-item" href="#">Starred</a>
                            <a className="dropdown-item" href="#">Settings</a>
                            <a className="dropdown-item" href="#">Log Out</a>
                        </div>
                    </div>
                </div>

                <div className="row" id="chat-list" style={{ overflow: 'auto' }}></div>

                <div className="d-flex flex-column w-100 h-100" id="profile-settings">
                    <div className="row d-flex flex-row align-items-center p-2 m-0" style={{ background: '#009688', minHeight: '65px' }}>
                        <i className="fas fa-arrow-left p-2 mx-3 my-1 text-white" style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={{}}></i>
                        <div className="text-white font-weight-bold">Profile</div>
                    </div>
                    <div className="d-flex flex-column" style={{ overflow: 'auto' }}>
                        <img alt="Profile Photo" className="img-fluid rounded-circle my-5 justify-self-center mx-auto" id="profile-pic" />
                        <input type="file" id="profile-pic-input" className="d-none" />
                        <div className="bg-white px-3 py-2">
                            <div className="text-muted mb-2"><label htmlFor="input-name">Your Name</label></div>
                            <input type="text" name="name" id="input-name" className="w-100 border-0 py-2 profile-input" />
                        </div>
                        <div className="text-muted p-3 small">
                            This is not your username or pin. This name will be visible to your WhatsApp contacts.
                        </div>
                        <div className="bg-white px-3 py-2">
                            <div className="text-muted mb-2"><label htmlFor="input-about">About</label></div>
                            <input type="text" name="name" id="input-about" value="" className="w-100 border-0 py-2 profile-input" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100" id="message-area">
                <div className="w-100 h-100 overlay"></div>
                <div className="row d-flex flex-row align-items-center p-2 m-0 w-100" id="navbar">
                    <div className="d-block d-sm-none">
                        <i className="fas fa-arrow-left p-2 mr-2 text-white" style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={{}}></i>
                    </div>
                    <a href="#"><img src="https://via.placeholder.com/400x400" alt="Profile Photo" className="img-fluid rounded-circle mr-2" style={{ height: '50px' }} id="pic" /></a>
                    <div className="d-flex flex-column">
                        <div className="text-white font-weight-bold" id="name"></div>
                        <div className="text-white small" id="details"></div>
                    </div>
                    <div className="d-flex flex-row align-items-center ml-auto">
                        <a href="#"><i className="fas fa-search mx-3 text-white d-none d-md-block"></i></a>
                        <a href="#"><i className="fas fa-paperclip mx-3 text-white d-none d-md-block"></i></a>
                        <a href="#"><i className="fas fa-ellipsis-v mr-2 mx-sm-3 text-white"></i></a>
                    </div>
                </div>

                <div className="d-flex flex-column" id="messages"></div>

                <div className="d-none justify-self-end align-items-center flex-row" id="input-area">
                    <a href="#"><i className="far fa-smile text-muted px-3" style={{ fontSize: '1.5rem' }}></i></a>
                    <input type="text" name="message" id="input" placeholder="Type a message" className="flex-grow-1 border-0 px-3 py-2 my-3 rounded shadow-sm" />
                    <i className="fas fa-paper-plane text-muted px-3" style={{ cursor: 'pointer' }} onClick={{}}></i>
                </div>
            </div>
        </div>
    </div>


        ;

}