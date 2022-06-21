import { Body, ClassSerializerInterceptor, Controller, DefaultValuePipe, Get, NotFoundException, Param, ParseIntPipe, Put, Query, SerializeOptions, UseGuards, UseInterceptors } from "@nestjs/common";
import { CurrentUser } from "src/auth/current-user.decorator";
import { User } from "src/auth/user.entity";
import { AuthGuardJwt } from './../auth/auth-guard.jwt';
import { AttendeesService } from "./attendees.service";
import { EventsService } from "./events.service";
import { CreateAttendeeDto } from "./input/create-attendee.dto";