import React, { Component } from "react";
export default class Menu extends Component {
    render(){
        return <nav class="navbar navbar-expand-sm bg-primary navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Principal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/nosotros">Nosotros</a>
                </li>
            </ul>
        </nav>
    }
}