import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateOptions } from 'src/pagination/paginator';
import { DeleteResult, Repository } from "typeorm";
import { AttendeeAnswerEnum } from './attendee.entity'
import { Event } from "./event.entity";
import { ListEvents, WhenEventFilter } from './input/list.events';