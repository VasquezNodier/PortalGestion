import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;

@Component({
  selector: 'auth-particles',
  standalone: true,
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css'
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadParticles();
  }

  loadParticles() {

    try {
      particlesJS({
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 1183.721462448409
                }
            },
            "color": {
                "value": "#7f0000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 4
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 0,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 33.56643356643357,
                    "size_min": 4.795204795204795,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#084A3D",
                "opacity": 0.3,
                "width": 2.4051180912982844
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "onresize": {
                    "enable": false,
                    "density_auto": false,
                    "density_area": 800,
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 158.35505639876231,
                    "line_linked": {
                        "opacity": 0
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 162.41544246026902,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    } catch (error) {
      console.error('Error loading particles:', error);
    }
  }

}
