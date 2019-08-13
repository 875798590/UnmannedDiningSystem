import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {filter} from 'rxjs/operators';

declare const ga: any;

@Injectable({providedIn: 'root'})
export class AnalyticsService {
  private enabled: boolean;

  constructor(private location: Location, private router: Router) {
    this.enabled = false;
  }

  trackPageViews() {
    let startElem = document.getElementById("nb-global-spinner");
    startElem.setAttribute("hidden","hidden");
    if (this.enabled) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          ga('send', {hitType: 'pageview', page: this.location.path()});
        });
    }
  }

  trackEvent(eventName: string) {
    if (this.enabled) {
      ga('send', 'event', eventName);
    }
  }
}
