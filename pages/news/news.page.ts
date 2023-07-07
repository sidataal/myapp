
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	news: any;
	constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
	ngOnInit() {
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		this.http.get(`GET
    https://newsapi.org/v2/everything?q=tesla&from=2023-06-07&sortBy=publishedAt&apiKey=58b6e8d4ea434a40aa06d011b0e6d3b9/${id}`).subscribe(res => {
			this.news = res;
		});
}

}
