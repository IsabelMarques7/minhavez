import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'
import style from './Tecnologies.module.css'

import reactImg from './assets/svg/react.svg'
import axiosImg from './assets/img/axios.png'
import NodejsImg from './assets/img/Nodejs.png'
import npmImg from './assets/img/npm.png'
import ReactRouterDomImg from './assets/img/ReactRouterDom.png'
import viteImg from './assets/img/vite.png'

export const Tecnologies = () => {
    const [show, setShow] = useState('all');

    return(
        <>
            <Menu/>
            <section className={style['wrap-tec']}>
                <h1>TEC´s</h1>
               <div className={style['wrap-btns-tec']}>
                <button className={style.btnTec} onClick={() => setShow('axios')}>axios</button>
                <button className={style.btnTec} onClick={() => setShow('Nodejs')}>Nodejs</button>
                <button className={style.btnTec} onClick={() => setShow('npm')}>npm</button>
                <button className={style.btnTec} onClick={() => setShow('react')}>react</button>
                <button className={style.btnTec} onClick={() => setShow('ReactRouterDom')}>ReactRouterDom</button>
                <button className={style.btnTec} onClick={() => setShow('vite')}>vite</button>
                <button className={style.btnTec} onClick={() => setShow('all')}>All tec´s</button>
               </div>
                <div className={style['wrap-cards-tec']}>
                   {show === 'axios' && <Card title='axios' imgSrc={axiosImg} desc='Facilita requisições HTTP assíncronas em aplicações web com React.'/>}
                   {show === 'Nodejs' && <Card title='Nodejs' imgSrc={NodejsImg} desc='Ambiente de execução JavaScript para construir aplicações de servidor e ferramentas CLI.'/>}
                   {show === 'npm' && <Card title='npm' imgSrc={npmImg} desc='Gerenciador de pacotes para Node.js, simplificando gestão de dependências.'/>}
                   {show === 'react' && <Card title='REACT JS' imgSrc={reactImg} desc='Biblioteca JavaScript para construção de interfaces'/>}
                   {show === 'ReactRouterDom' && <Card title='ReactRouterDom' imgSrc={ReactRouterDomImg} desc=' Gerencia navegação dinâmica em aplicações React via URLs.'/>}
                   {show === 'vite' && <Card title='vite' imgSrc={viteImg} desc='Bundler moderno para desenvolvimento rápido de aplicações web com frameworks.'/>}
                   {show === 'all' && 
                   <>
                   <Card title='axios' imgSrc={axiosImg} desc='Facilita requisições HTTP assíncronas em aplicações web com React.'/> 
                   <Card title='Nodejs' imgSrc={NodejsImg} desc='execução JavaScript para construir aplicações de servidor e ferramentas CLI.'/>
                   <Card title='npm' imgSrc={npmImg} desc='Gerenciador de pacotes para Node.js'/>
                   <Card title='react' imgSrc={reactImg} desc='Biblioteca JavaScript para construção de interfaces'/>
                   <Card title='ReactRouterDom' imgSrc={ReactRouterDomImg} desc='Gerencia navegação dinâmica em aplicações React via URLs'/>
                   <Card title='vite' imgSrc={viteImg} desc='Bundler moderno para desenvolvimento rápido de aplicações web com frameworks'/>
                   </>}
                </div>
            </section>
        </>
    )
}