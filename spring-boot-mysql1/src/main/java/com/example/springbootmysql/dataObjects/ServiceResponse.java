package com.example.springbootmysql.dataObjects;

import java.io.Serializable;

public class ServiceResponse implements Serializable{


    private String status;
    private String message;
    private String email;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
