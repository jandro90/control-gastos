import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class StorageService {

    public save(name: string, value: string) {
        localStorage.setItem(name, value);
    }

    public get(name: string) {
        return localStorage.getItem(name);
    }
}