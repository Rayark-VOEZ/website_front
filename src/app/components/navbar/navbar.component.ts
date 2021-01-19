import {Component, ViewChild, OnInit, HostListener, Renderer2} from '@angular/core';
import { faBars, faHome, faFireAlt, faRandom, faImage, faSearch, faCubes, faSignInAlt, faUserPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    faBars = faBars;
    faHome = faHome;
    faFire = faFireAlt;
    faRandom = faRandom;
    faImage = faImage;
    faSearch = faSearch;
    faCubes = faCubes;
    faSignIn = faSignInAlt;
    faUserPlus = faUserPlus;
    faInfoCircle = faInfoCircle;

    public toggle_flag: boolean = false;
    @ViewChild('sidebar') sidebar: any;

    constructor(private renderder: Renderer2) { }

    ngOnInit(): void {

    }

    toggle() {
        if (this.toggle_flag == false) {
            // this.sidebar.nativeElement.style.transform = "translate(0, 0)";
            // this.sidebar.nativeElement.classList.add('expand');
            this.renderder.addClass(this.sidebar.nativeElement, 'expand');
        }
        else {
            // this.sidebar.nativeElement.style.transform = "translate(-16rem, 0)";
            // this.sidebar.nativeElement.classList.remove('expand');
            this.renderder.removeClass(this.sidebar.nativeElement, 'expand');
        }
        this.toggle_flag = !this.toggle_flag;
    }

    // 监听滚动事件
    @HostListener('window:scroll', [])
    onWindowScroll() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let navbar = document.getElementById('navbar');
        if (scrollTop <= 1) {
            navbar.style.background = "rgba(31,31,31,0)";
        }
        if (scrollTop > 0) {
            // console.log(scrollTop)
            navbar.style.background = "rgba(20, 20, 20,.8)";
        }
    }
}
