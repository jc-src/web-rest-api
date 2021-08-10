import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    baseUrl: string = environment.apiUrl; 

    constructor(private http: HttpClient) { }

    get<T>(url: string): Observable<any> {
        return this.http.get<T>( this.baseUrl + url);
    }

    post<T>(url: string, payload: any): Observable<any> {
        return this.http.post<T>(this.baseUrl + url, payload);
    }

    put<T>(url: string, payload: any): Observable<any> {
        return this.http.put<T>(this.baseUrl + url, payload);
    }
/*
    fetchVirtualMachine(id: number) {
        return this.http.get<VirtualMachine>(this.url + '/' + id );
    }

    deleteVirtualMachine(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    saveVirtualMachine(payload: VirtualMachine) {
        return this.http.post<VirtualMachine>(this.url, payload);
    }

    updateVirtualMachine(payload: VirtualMachine, id: number) {
        return this.http.put<VirtualMachine>(this.url + '/' + id, payload);
    }
    */
}