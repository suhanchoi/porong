package com.porong.common.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class RequestCreateMessageDto implements Serializable {

    private Long senderId;
    private Long receiverId;
    private double latitude;
    private double longitude;
    private LocalDateTime dueTime;
    private String title;
    private String contentText;
//    private String contentUrl;

}
