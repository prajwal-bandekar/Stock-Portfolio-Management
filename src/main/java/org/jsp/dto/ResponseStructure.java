package org.jsp.dto;

@lombok.Data
public class ResponseStructure<T> {
	private T Data;
	private String message;
	private int statusCode;
}
