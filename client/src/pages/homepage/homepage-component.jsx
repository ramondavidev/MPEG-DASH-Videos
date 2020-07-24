import React from 'react';

import './homepage.styles.scss';


const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='container'>
            <div className='jumbotron mt-3'>
            <h1 className='display-4'>Cursinho Britein</h1>
            <p className="lead">Bem vindo a nossa plataforma, aqui vamos preparar você para conquistar a vaga desejada para o seu curso.</p>
            <p>Estude, pratique e conquiste!</p>
            <a className="btn btn-outline-secondary btn-lg" href="#" role="button">Aprenda Mais</a>
        </div>
        
        <div className="row my-5">
            <div className="col-lg-4 perfil">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPYmT6bjqeGgXH1Z3LpCaGMpMqAIcyyc_EtA&usqp=CAU" alt=""/>
                <h2>Marcos</h2>
                <p>Psicólogo do Britein para ajudar e guiar os alunos para estudos e provas.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Ver detalhes &raquo;</a></p>
            </div>
            <div className="col-lg-4 perfil">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIWEhUVGBcVFRUWFRUVFRUSFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lIB0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABGEAABAwIEAwYCBgYIBQUAAAABAAIDBBEFEiExQVFhBhMicYGRB6EUMkJyscEjYoLR4fAzUpKis8LS8SQ0U6OyFRY1VHP/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAKhEAAgIBBAEEAQQDAQAAAAAAAAECEQMEEiExExQiQVFhIzIzcUKBkQX/2gAMAwEAAhEDEQA/AKCoYXKLLhUhFw0rfYfg7BqRc9VaOomhq4T1cYdDRx7jh1fRSMPiaQkU4W17Zvaw25jZYdsmq16fPLNC6IyR2ukT2yAKurH3TrpFGkV0IbXYg3Gy6nwxaKNTu1Vmxtwqs03ZNDIjV9hFNYZrcfkqaNhutThcPh1WPM21RZjNngkAsLK5dGOSp8JkAACn1Naxn13Bvnv7KqMW+i9Mm00QurGJixM/bCnicAXE3I1Gu6uWdq6e18xsACXWNgCiemyd0G5MualLLhZVFNjEM9jFK11xewIzW6t3CXNObJZpxVNCsiYo/XRUckxBVrNrqq2qiBVEZFbIss10dJPYpiZhCRAdVdH7A2OGVotYqdLVttos5Rx6AhTQTbdXLU1wyGhnEGhx13VbksVaSNN1CqDy5rNmnFLcCCZScVCxWmAaeStITZQsSObw81zZP32iTKYRTgPIPPRa2NgIHRVkOFEeIJw1DmkN4rTflnaFSotLBEoXeu5D5oKzwT+ibLyOcN6KFieLtA31UWtpJXHRxA+aqcUwmzTcm635IYZJJEKTRie0VaZZSb3A0Cq2tUrEI8rrKOxdXFCMYJR6K2xWVNuClsCRKxTQIapo7lXkLBZVMEllKiquCx6iMmMWbYRurFlcNGqtpSXeSm4lTgBjW6H7TrX4DbRJp8EpO5dDxZaVGKPbHZtwDpmafEFlJpnZtSXdSb3vrv8AzspVbO9rcoAdbiTf3CrYZRrf6p15lrrfMfwXQhFQ6RL5INTO4PA4WB9S1tz8ypNNOXNcSSSBe3Tp5JE2XYkOA+q7Xb03CSwNLvCch4jdpCssigCqcGNs433aeRJPL+dVq8B7UzRNyyfpG2GhOrTpex5dFjnMtYaaHh6/mpFLVgBpP2TZ33Sd/ZRKMJqpIjldHTaXtFFJYZspPB2mvIHYqzaQeq5Rq3XdpJ977LTdm8Z17pxJtsTy4Bc3UaCKW6BNtmtmjCimIBT2OBCEkYWGK+AE08wAtdSmThVVQ2yix1BCSePmyGXk8yr3vJNrJuKXNxVtR0wcbqma3raCFwReHVVtY0h11qhSaWVXXUQusssLTQ5Bp5Rl1VNX1Dc11Z1dPlWfro8xOi044bGpL4FbJucc0FUfRygtfqkJR0Zkel7KmxumJboFqYIhlSZaQOWBZHFltWcK7T4PJCc51a7jyPJUbHrtXbHCQ+ne23DTzGy4iRZd/QanzQafaKpxpk1j0ZN1EY9TYAtzYg33am4RSBz/ABbDUjn0RMjU2jjykH+Qs8ppdkov6KdrwWlga06AgNu22x59f50E75IzYtvYb2FiOYcByCpXVhbc2v0taw5gjdSMGEs5DA1xzG44AAbk29Fdu4NCjyJqJDIfCCTyO/vxCgS4NKXlrGEAuPnqbhdPwns7FEASMz+JKtm0bBrlF+ai2y5Y0cuh7By28RA425Ka3sOwDV2vNdBkjuo8sOiZEuCMMeykQGuqoMY7OmO7o9OnRdHqIrKFVw6baFWcFbic/wANee6cH6jxadSdPn+CQ5uQNe03tuOJ5H8VY4nhRBOXqf39Nrqgq+8ivfoPw/0paKmdV7M1PexNJ0O1vJXb4gVgOxFUDsdDqN/Zb6N1yuHq4OGTgjtEOqgVPWQEDRbTuhZV1dQhwR4ptC2ZyivotRhTlQdzYq4wl1gudP8ATY8TUseLKrr5Re5R/SVFn8StwrycsmUirrpMxUf6ECCVPdDr0SZn2bZW5ZKPtEKbuQgpWiCwV+STZZrBSqQaJqRieY7knk03wWRRTdpBZhXA8dhyTvA53HqvQWMw5wQVxftxhzmzAgXuPwK3f+dPblr7QuRcGZYplOVEykJ6F6712Zy0heraGHRUVFJ4lqIHjKsWqltRKRVysLn5cnU8RYbk9Frvh1hrgySok+vK4hv6sTDaw5eLN7BUcMBdM07M3fvrbYLo+GQ5Y2AC1mjT5n8VpxPdBM1w5ZLijThZoiBRZk5oGnhRpgpL2nyUaQoJohSNUOeO+ilzu1UV8gU2I0Z/FmFvitos5O9sg8Q6X5ei3VQ0ELGYvTtic7hx+RuEynyUThxYx2flEM4A2JsT0dsV02mB0K5IQXuOQeLa3XY/MBdawIl0EZd9YNAd94DVZNZjUqkVpUi7iF0qeNoCZiKRVy6LG8tCUUVbYHZSqNpsq+qkzSW4DdXdM0FoXJyvfJoeIhkbidFLbHYa6KbQMbZP1zWgK7T3AJIqi0KBWs/FSnXF9dCqasqTe1+KvnhbdshSHO6CCh/SHI03jQtm1ExO6afVhu6izVYbe6x3aLH8oJBtwXPxwcpJIuujcSVAcN91QY3hzJGm4vyWdwPH9LON+KuavG2FnhIK1rFKMguzm3aHDjE7of51VKHLU43IZSba8gqGbDHt1K6+HJ7fcUzjyR2SkHRaTDZC4LNN0OqvcLqQEmrVw4FRoqQEPYOZ3/nyC6NSnwDyXNaWoDtAbHceXH5fgugxTARMN7AgW13uPmrdPK8SNWImmSyYfWN2Bv5KJVy+G5Fmji45B8/F8lnW1jXutFKzN/VAe8HpmuPwVzUvg0qcV2aatqsouVQOxGSVxbECbb2toOpJsFOmqXy04e2PIdRZzgDcaaZb/kszg9X3oMbHZHhuVzddwbEg+d0qjzyEp8cF7NE4C752M5gEE36OdYDyylVskQ3D3H9YPt62b4T7J+p7ORvaA/OSN7aZtePRMDAY2HNqwDfxEe91YmukVOL+SJQiqkJL3RtaHEANzFxAJBLtRa+h026pvH8FEzczRd45cuI/nVXMUgAdYWBJIGxtYDbzBPqnWnimVoVxVGVwfAmhliNXAgnYjZX/AGIzsfLE76rB4Ry1H70Mapgcsl7Ft7Ha17fwU7AGEvLuJjF/7WnyWbNB2yy14Wi7fJpookrnHinCLImuF1zskbMSK8UZzXVvCywslssbKQWBZfCrGK+WsMfkoz+0LX+Amx4E7XS8VboVi5hZ624MUe2UzmzWifw2LtR639VW1LrHVFQwODQU7JAXKvW54xVIIjOZBL+iolzvUD0TMcqbPIB4LAYld7jfZXNfiBeSRxVTLINVq0qeN8kydlNmLDunYq13NNVh4hQw9dxJSVi2aTDZQ7dWjaLvPJYuKqc3Yra9lazvG2cdRwWPU43FbkWxd8FDieAPHiaCQlYL2bnlP9VvNdHgiaQrHD6VrRoLLP6qe3aT41ZiJuz30cd5dziwE2AzX01AaN9FP7J4mTN3bg7xR+HP9ZobY2A3A6dFosYc1rCXEBZTs7O2eoD4z44MweBbxxuBAIvvYkD0HNadHkcrTGUafBoMQw10xd3r7M+y1t78NdON7osMwKOMgtZa2ovq6/8AWubqyZK931YifvOa0e4uqzG6hzB+kkAuQ3IwWBzEDxOOpGvQHktjdI1Rhb/I7g0RFKAXF4u9zXHi173Pb8nBUkFGIpS9pIcdxlzNPmBqD1utXAWBlg4EAW06afksfj+NthJyWLr2BO3mpbVE7eDR0srpdBMxttCGs8YPm8ke7ShNhbAczi57ubnE69Bs30AWAocV8ZlJOYgXy6Wt0Wpou0DZAATqduF/49FXvaHUU+hyqbbYJcWoso9TLfZCF1irI5LK8sOCTJq0X1sQVLwFpEknHwgnzcTYegb81Fe24sDa/wAim+w0sj2zSy6Oc/JlGwEegA57lTlqjJKVRouqw2CrIZrusrSrbmCrqOmPebLmai+0UlnTkqR3qS2LKFE7030WfHFvljNiqmLNuq8YK1zsxG2yvKKLOrOShs1WyyJKkJssp46CzUl1IBwUySoA0RGQHZcuak3yMkQPooRqQgn2v6JMFJTECwCzGMuLX2AOq6LJTG22qpm4RmcS4XK6eHGtzkx3G0YV0D7ahQJWkFdQfhrbbKkqsMYfshasWTnkTYYloJUygrXxOu0q2rcOa3UadFBMAK0OpLkS6NLhXae+4tfdbKGvs24K5RFoVosPxR1spWHNpVftHWT7Hu2lW57NCd1S9ga/ua1gdo2UGI+btW/3gB6qfiUneKjqaaxDm6EG4PIjUH3WnBHZDaRv91nanz5eKwPaWvz1EbdSA7MfIFaGhrTUwMkHEeIcnjRw9x7LOY9hEkeaYam2UX4XKiVnVjJbbRMMcrgXZiwHc3A5+42UWTsqZS0/pZHWzZtmkcCCRY+hT/ZzA6uKds8j2SsyEMabkNcbFrg3a4t/Fa+trnhvjlEfRoDdPM3I9CE0YfIjd/H/AEwtVhHcNJ7tg8Iccz/FlcbbWVPT0k78z+6yMGzrkXINgWjpzW4bFDuLOPPc+5RyyNy2Ox09Ap2oCTW0wa0HjYe6rSbbqQ6ruwN4tFvbZV0suqi6B8osYpFoMDpWiM5Ru9zj5u1KytNJ8lsOzX1D5/kjM/0zHliOmnCeoaK5upLognGSBuyy1vjRQgpqTRUVXCAbq8lq9OaoK2bMbDmk2bYg3yTsEmAOvNXs0wyrJRRubqFLfI4i19EjwSStjKfBXYoS5xsUqGQtbY69VKgp7m/JHPHYJvApiJkL6Sgm7FBWemCy0lp9FAlhtsrUnRR3MUYOi6yhrrgKjcHX2WmrASUmKhvwTSzRgwbMdXUb3bBQGYRJyXT48MB4Jz/0kckvrfoppnKRg0hOysqTCH22XRBhA5JbcLA4JPVthtMC7CX8lHfgTyuljDRyQdhw5KzHncpJCtUjK9nKUwtLDsTf9rY/gPZWuIRB8ZYeKs4MNBcBzKjY5h74buAJj57ln3unVdHJH5Ro0ub/AAf+itp58oEd9hY23sqbF476i/S+pudlYm1nPFtTcnhfZV9dKAAN81+v1RtbnYBU0bFMKnfkYBr+sfmodVUeLKDoNvb+IUOtxPKw5Tra5J6kZfYAKHRlzs1wdTe53Ou6m0LKTbLU1evmlNJIUZsVlLibcWCQZckykCsIsQlhe4xWOWCSQsJ8LnMLSwHlfxi/BV9MLb8PxRYnViKjqqg7vYY4/I3Y0+rnk+S1aeCld9GfU8I3eCYxFWU7J4j4Xi9uLXfaY7qDon5HWXnzsZ2smoJPDd8TiO8ivo7hmbyeBx47Hp3LCsXiqY2yxODmu25g8WuHAjks6xeKX4MguplI2ChxNubqbM8KP3guiVbuQJrI7hB0eikU+oRVOgVkkmiSBBPY2SpnXVRXVgjcTwTDMRDtQssJKLpkFtYdESrvpaCt8qAvM1wgRdDIlNCzwjUaLSG6HVWNLTpkM1VpSRqqeByYD0NMnRTKRC1PZVMdF9i2QxTBGKYKXZInmaxpe9wY1ou5ziGtA5knQK+OjiRYyKYJE0CwvaL4v0cJLaZrqpw+0P0cV/vkXd6C3Vc4x/4qYjUXDXtpmn7MIs63WR13e1lohplEWXKO0YnitNSWfUTshG4DnDM77rd3egWKx74rwvkjhpYy+N72NlmkBb4HOAPds324ut5LjTnOc4veS5x3c4lxPmTqUmU6FakqVCxxpOzvVXQgAlg00zNG3mFncRoMwADy22o8+a2jG2u3e1h6WBVdWUAPBZZKnR0kk1ZiRhg+0c17eWllJjgtwV6/D7Jl8FuCr2jcFa2DVOtYG7qQ5iZla4+FoJJ0A5ngmURk6QKdhmf3bdt3uHBv7zt/ss18UMVBdHSx6NYA5wG19mD0Fz6hbaqyUNO5xN3Bpc88yBsPwC4lWVLpXukf9Z5Lj68PTb0XQUfHDb8vs5+Se+VjTVf9mu0MtI8ujN2u+sw3yu5HoeqoAnb6JGrVMrOtYb25p5bCTNEevib7jX5LXUDWSAPje2Rv9ZpDh7j8FwC9x1UrDsVmgdmikdG7m1xF/PmOhVTwx7RG09FxAjdLe265NhPxTqWWE8bJxz/o3+dx4T7BbbB+3tBUADve4cfszeDXo/6h979Eji4kkjEsNDgVTQ0OQ2stdOL6hVVRYEKjJCLVgRPoiCnZ0EmxAWM5ARQlUtdiWu6mYdPmSwkrLS1jbqrKnaotKxN4r2jpKTSeZrHWzBm8hHRg1WiEk+AaL6JFVVDI2F8j2sY0Xc5xDWgdSVx/HPi/IbtpYmxjg9/jf52HhHzXPca7RVNUbzzPl4gOPhHk0aD0C1JFZ03tV8XcpLKFgcBp30gNj1ZHpp1d7LmOO9pKmrN6iZ8vENJsweTBZo87XVS96YkcmAKR6DG8SksGqcugBSRNsUZKKXY+SAPQOKVXd1LWnaWO7eWdlrj1Dv7qcMvCyr+3MLnUsNQ360WR9+haAfkfkn8GqBNGHdNVVmj7jdhlcB7QqHPDcq1NMmKksYMzzYfM9AOKqUbGbS5Kv6NsALk7DmVZ0mGCAGSSxfbQcGj96i4d2lp2us5jmXNhISHD1A1b7FO9pMRDWOcTZrQXE/qgXJ9ltw4ox9z7MmXM3wujmvxMxovc2AH9d/l9gfn7LChP19UZpHyO3eSfIcB6Cw9EyFEnbsqAlpNktoUAKjelkplhSyUAKujD00ShdBBf4J2pqqXSKU5P+m7xR+jT9X0stpQdtop2jviIXjfcsd1B4eR9yuWXSmuSTgpLkDr/AP7ip/8A7DP7SC5J3iCp9NH7ZNm/qcXJdutn2bnuAue0uCyvIJFgugdn6AxgArmSyQXCZYmamtxFtPTyzu2iY55HPKCQPU2HqvOFdiEk0r5ZXFz3nM48yeXTgByAXYPijiIiw90d/FO5rB91p7x/yZb9pcTJ1XQ0i9rl9kTYouSboXQC1iAcbJoC6N7kcTOPJAC22APE/gmwEqyFkABqKXYpQCDtkAegRiVKaGBk80bDLBH4XOGYh8bfs7qm7JExOMTjsdDwc3g4dCLH1WO7M4feF07W96/IxzWkF3jjy5hYEFxyjQXW4nc97IKgtIeTI0gtyuMLXnunObpY5bf2k2SO5FuKVOjSVUmVt8pd0H71m6zNI4udp05DgArx1WBFfibW81S1M5PqoxxVE5JNuiorowNhtxWZ7aYqWU0dOD4pBd3MRB5IHrZo8gVtpqEkW4ndci7SVgmqZHN+qCGM5ZIwGAjobE+qZ8FcmVQSgEYCNIKEkanyTqIqQFMQKSwo0AEgiKCgAI7okEEB3RpGZBSB6KgoAOCnww2SXygJp9a0cV49Pkss578Zam76aPk17z5uLQP/ABK5o/cLd/FaYOqIiP8ApW/vlYORem0n8MRGKQeUpqaeVpAJouU7IbDKPXzRM0F+J2/MpLQgAMKVZI4pwBAARFGiKAOi9hZO4ZE437qZoOYamKZpLSbcWm2vmtxX0jpX99K5romf0bWOJzaXLnG2n7gsp2Ds6iiB1s6Qf91/71vJKQPhczUBzXN03s4Zb/MrUukBV0578ZmkOGwym4A4AJ+mw/UvI0G3mNE7gPZ4UXevL+8zAvNm5QABfa5uTzVjUm1mDfj+ahILMh24xH6NRyPBtJJ+ij5hzwbuHk3MfMBcSW5+LGK95VCBpuynblNtjK+znn0GUe6w4VM3bANCyOyNIASYe65S5HX0CDGoAU0IyggUAIRoijCACRokLoAPOjSEEAdmxvHcptdZyXtE6+6f7Q0pc64ChNwQthlldpkY93qGm3zXGxaOPbJcWZjGK908rpHHfQdGjYfn6qul2S7pEmy7EUoql8EC76JpouUZdoENh5/gpAD3XKWAm4wnHFADb08zZM2TkeyADQQuiQB0f4fy/wDCgcGzOB8jld/mXV6UAsaf53XIPhyf+HmHKW/uxv8ApXXcM/oo+oB9/wDdao/tRBIrXWY/yt6HRU2I4g2CGapfqI2udbnYeFo6k2HqrDGH2id5tH94LnPxcxTJTw0wOsp7x/3GfVHq43/YRJ1GwOV1U7pHue83c9xe483OJLj7kpDUQSgFlJDSHu4BG91kkBAADUYQQUgBEUaIqAEORhEUTSgAyjKLiggAIIIIA7lidFrss927qu5oxGNDK4N/Yb4nfMNHqt7PBdcl+J9TeqbENomD+0/xH5ZVztNPdKi2T4MkxJkSzsm5F0SoAbewSXuuUomwTbUAPRBByNCyACARnZGETygABBNRu1snkAbT4eTWiquhjd8nD8l2ihGWONvJrR7NA/JcN7A6/SW82R+2dw/NduhqW3AJANtiddT/AAK1w/YhfkRjp8DGjd8jR7XP5BcF7d4r9JrZng3Y091H9yLw3HQnM79pdg7fYp3EPeA2LGPcz/8AV1mR+znArgCryvhIlAalk2RWSDqeioJCZqblKclbJBQAAgghZAAuiJQsiKAElEEZSEALbujKSxKKAAiQQQB6YkXDO33/AMjUfeb/AITEEFytD/I/6Hl0Ub03LsgguqIFJskxboIIAfKAQQQAGpMiCCAGOI81JQQQBqvh1/Sz/cZ/iBbrFf8Am4vuf5SggtK/jF+Rn4wf8uzzH/kuOhBBV5O1/RKDfsij2CNBVkgeicggoAIIFBBACEEEEAEUgIIIAUxKQQQASCCCAP/Z" alt=""/>
                <h2>Pedro</h2>
                <p>Diretor do cursinho Britein, com 18 anos de experiência em sala de aulas.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Ver detalhes &raquo;</a></p>
            </div>
            <div className="col-lg-4 perfil">
                <img src="https://womensadventureexpo.co.uk/wp-content/uploads/2018/05/SarahEvans.jpg" alt=""/>
                <h2>Rafaela</h2>
                <p>Cordenadora, responsável por organizar, gerenciar e estruturar o cursinho.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Ver detalhes &raquo;</a></p>
            </div>
        </div>

    <div className="row featurette my-5">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading"> <span className="text-muted">Aulas Online</span></h2>
        <p className="lead">Assita nossas aulas em qualquer lugar e tenha os melhores conteúdos na palma da sua mão. Nunca foi tão fácil aprender, não perca essa oportunidade e junte-se com nós. Faça parte da Britoin!</p>
      </div>
      <div className="col-md-5 order-md-1">
          <img className='img2' src="https://noticiahoje.net/wp-content/uploads/2017/10/transmissao-videos-online-magic.jpg" alt=""/>
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

export default HomePage;