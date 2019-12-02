import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async logout() {
    await this.router.navigateByUrl('/');
    this.authService.logout();
  }

  async downloadFile() {
    const resp = await fetch('https://cspmarketplace.s3.us-east-2.amazonaws.com/media-files/lorem-ipsum.pdf');
    this.saveFileFromBlob(await resp.blob(), 'name.pdf');
  }

  saveFileFromBlob = (blob: Blob | ReadableStream, fileName: string): void => {
    // IE doesn't allow using a blob object directly
    // instead it is necessary to use msSaveOrOpenBlob
    // https://stackoverflow.com/questions/44824034/not-allowed-to-load-blob-pdf-resource-in-microsoft-edge
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
      return;
    }

    const URL = window.URL || (window as any).webkitURL;
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    // have to add to document for firefox
    link.style.display = 'none';
    document.body.appendChild(link);

    link.href = blobUrl;
    link.download = fileName;
    link.click();

    /**
     * Firefox, especially old versions require to have a small timeout before removing ObjectURL
     */
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(URL);
    }, 100);

    return;
  };
}
